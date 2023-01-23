import axios from 'axios'
import { useState, useEffect} from 'react';
import './login.css'
import Modal from 'react-modal';


export default function LogIn ({setIsLoggedIn , isLoggedIn, setToken, token}) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })
    const [modalIsOpen, setIsOpen] = useState(false)
    const [errState, setErrState] = useState(false)

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        try { 
            const { data } = await axios.post('https://aether-web-store-api.herokuapp.com/auth/login', formState)
            setToken(data.token)
        } catch(err) {
            setErrState(true)
        }
        
    }

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'black',
          padding: '1em',
        },
      };
    

    // redirect to home page if not logged in
    return (
        <div className="container">
            <h1 className="nav-btn" onClick={openModal}>L O G I N</h1>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Login Component"
                style={customStyles}
            >
            <form onSubmit={submitHandler}>
                <div className='modal-label'>
                    <label htmlFor='username'>Username </label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formState.username} />
                </div>

                <div className='modal-label'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formState.password} />
                </div>
                { errState ?
                    <p className="error">Incorrect username/password</p>
                : null}
                <button type='submit' className="button-login" >Login</button>
                <p> or </p>
                <a href='/signup' className='create-acc'>create account</a>
            </form>
            </Modal>
            
        </div>
    )
}