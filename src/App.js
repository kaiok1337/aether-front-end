import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home'
import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart'
import FourOhFour from './components/FourOhFour'
import ProductDisplay from './pages/ProductDisplay'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [token, setToken] = useState('')

  async function getUser(){
    let bearerToken = localStorage.getItem('token')
    const config = {
      headers:{
        Authorization: `Bearer ${bearerToken}`
      }
    };
    const userData = await axios.get("https://aether-web-store-api.herokuapp.com/auth/user", config)
    setUser(userData.data)
  }

  useEffect(() => {
    if (token){
        localStorage.token = token
        getUser()
        setIsLoggedIn(true)
    }
  }, [token])

  return (
    <main>
      <Nav setUser={setUser} token={token} setToken={setToken} cartItems={cartItems} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="*" element={<FourOhFour />}></Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} user={user}/>}></Route>
        <Route path="/signup" element={<SignUp setToken={setToken} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/" element={<Home  user={user} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/product/:handle" element={<ProductDisplay isLoggedIn={isLoggedIn} />}></Route>
      </Routes>
    </main>
  );
}

export default App;
