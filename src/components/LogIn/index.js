import axios from 'axios'
import { useState, useEffect} from 'react';
import './login.css'
import Modal from 'react-modal';


export default function LogIn ({setIsLoggedIn , isLoggedIn}) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })
    const [modalIsOpen, setIsOpen] = useState(false)

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const { data } = await axios.post('https://aether-web-store-api.herokuapp.com/auth/login', formState)
        localStorage.token = data.token
        setIsLoggedIn(true)
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

                <button type='submit' className="button-login" >Login</button>
            </form>
            </Modal>
            
        </div>
    )
}