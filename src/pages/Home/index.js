import axios from 'axios'
import '../../App.css';
import React, { useState, useEffect } from 'react';
import Product from '../../components/Product'
import Nav from '../../components/Nav'
import Spotify from 'react-spotify-embed'
import LogIn from '../../components/LogIn';
import './home.scss'

function Home({setIsLoggedIn, isLoggedIn, user}) {
    return(
    <div className="App">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <a href='https://www.youtube.com/watch?v=wBdxYejGL6k&ab_channel=AetherWave'><img src='https://media4.giphy.com/media/G7BePQkFRfh06oumYF/giphy.gif' /></a>
          </div>
          <div className="slide">
            <a href='https://www.youtube.com/watch?v=vZnwdgM28nE&ab_channel=AetherWave'><img src='https://media1.giphy.com/media/3CHwqmSyWf7SCOQNKT/giphy.gif?cid=790b761113c4cc7e06bb3c0c52c50cbbfff94fccd190d278&rid=giphy.gif&ct=g' /></a>
          </div>
          <div className="slide">
            <a href='https://www.youtube.com/watch?v=g8efB0THJOA&ab_channel=AetherWave'><img src='https://media1.giphy.com/media/02UzDcR6hrAcW2SpSK/giphy.gif' /></a>
          </div>
          <div className="slide">
            <a href='https://www.youtube.com/watch?v=Xi1FSF8lOVg&ab_channel=AetherWave'><img src='https://media4.giphy.com/media/cZMJRTgPXEVdRlk4Uw/giphy.gif?cid=790b761102298c4338c4810e987ac3e5a389a5235900f1f6&rid=giphy.gif&ct=g' /></a>
          </div>
          <div className="slide">
            <a href='https://www.youtube.com/watch?v=Xi1FSF8lOVg&ab_channel=AetherWave'><img src='https://media4.giphy.com/media/cZMJRTgPXEVdRlk4Uw/giphy.gif?cid=790b761102298c4338c4810e987ac3e5a389a5235900f1f6&rid=giphy.gif&ct=g' /></a>
          </div>
          <div className="slide">
            <a href='https://www.youtube.com/watch?v=Xi1FSF8lOVg&ab_channel=AetherWave'><img src='https://media4.giphy.com/media/cZMJRTgPXEVdRlk4Uw/giphy.gif?cid=790b761102298c4338c4810e987ac3e5a389a5235900f1f6&rid=giphy.gif&ct=g' /></a>
          </div>
        </div>

      </div>
      <br />
      <h1 className="merch">M E R C H</h1>
      <h1>. . .</h1>
      <Product user={user}/>
      <Spotify  link="https://open.spotify.com/artist/7Jtn7Qm47bezv1myVrZIZo?si=DOnmq_uIQ2CrgXuahmPncg" />
    </div>
    )
}

export default Home;