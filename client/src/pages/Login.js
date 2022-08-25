import React, { useState } from 'react';

import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER)

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
            const { data } = await login({
                variables: { ...formState }
            })
            Auth.login(data.login.token)
        } catch (e) {
            console.error(e)
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <section className='formstyle'>
            <div className="center">
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit}>
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

export default Login;