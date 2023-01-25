import './nav.css'
import LogIn from '../LogIn'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../images/logo.PNG'

function Nav({setUser, isLoggedIn, setIsLoggedIn, setToken, token}) {
    const [rerender, setRerender] = useState(false)

    function logout() {
        localStorage.removeItem('token')
        setUser({})
        setIsLoggedIn(false)
    }

    return(
        <main className='nav-main'>
            <img className="logo" src={logo}></img>
            <nav>
                <Link className='nav-btn' to="/" >H O M E</Link>
                { !isLoggedIn ?
                <div className='nav-div'>
                    <LogIn token={token} setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </div>
                :
                <div className='nav-div'>
                    <Link className='nav-btn' to="/cart">C A R T</Link>
                    <a className="logout nav-btn" onClick={() => logout()}>L O G  O U T</a>
                </div>
                }        
            </nav>
            
        </main>
        
    )
}

export default Nav