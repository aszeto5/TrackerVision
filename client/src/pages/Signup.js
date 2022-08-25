import React, { useState } from 'react';

import Auth from '../utils/auth'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    const [addUser, { error }] = useMutation(ADD_USER)

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState }
            })
            Auth.login(data.addUser.token)
        } catch (e) {
            console.error(e)
        }
    };


    return (
        <section className='formstyle'>
            <div className="center">
                <h1>Signup</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="inputbox">
                        <input className='form-input'
                            placeholder='Your username'
                            name='username'
                            type='username'
                            id='username'
                            value={formState.username}
                            onChange={handleChange} />
                        <span>Username</span>
                    </div>
                    <div className="inputbox">
                        <input className='form-input'
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.email}
                            onChange={handleChange} />
                        <span>Email</span>
                    </div>
                    <div className="inputbox">
                        <input className='form-input'
                            placeholder='******'
                            name='password'
                            type='password'
                            id='password'
                            value={formState.password}
                            onChange={handleChange} />
                        <span>Password</span>
                    </div>
                    <button className='inputbox' type='submit'>Submit</button>
                </form>
                {error && <div>Sign up failed</div>}
            </div>
        </section>
    );
};

export default Signup;
