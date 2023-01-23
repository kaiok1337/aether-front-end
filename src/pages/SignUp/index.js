import { useState } from 'react';
import { useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './signup.css'


export default function SignUp({setIsLoggedIn, isLoggedIn, setToken}) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        email: '',
        roles: 'user'
    })
    const navigate = useNavigate()

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const { data } = await axios.post('https://aether-web-store-api.herokuapp.com/auth/register', formState)
        setToken(data.token)
        navigate('/')
    }

    
    

    return (
        <div className="signup">
            <h2 className="heading">Sign Up</h2>

            <form onSubmit={submitHandler}>
                <div className="input-texts">
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formState.username} />
                </div>

                <div className="input-texts">
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formState.password} />
                </div>

                <div className="input-texts">
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        name='email'
                        onChange={handleChange}
                        value={formState.email} />
                </div>

                <button type='submit' class="sign-button" >Sign Up</button>
            </form>
        </div>
    )
}