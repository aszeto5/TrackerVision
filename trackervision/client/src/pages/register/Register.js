import { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    const handleSubmit = async () => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="Signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Email:</label>
            <input
                type="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>SignUp</button>
        </form>
    )
}

export default Signup