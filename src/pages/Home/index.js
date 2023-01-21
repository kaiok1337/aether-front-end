import axios from 'axios'
import '../../App.css';
import React, { useState, useEffect } from 'react';
import Product from '../../components/Product'
import Nav from '../../components/Nav'
import Spotify from 'react-spotify-embed'
import LogIn from '../../components/LogIn';

function Home({setIsLoggedIn, isLoggedIn, user}) {
    return(
    <div className="App">
      <Product/>
      <Spotify width="50%"  link="https://open.spotify.com/artist/7Jtn7Qm47bezv1myVrZIZo?si=DOnmq_uIQ2CrgXuahmPncg" />
    </div>
    )
}

export default Home;