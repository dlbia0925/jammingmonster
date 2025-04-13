import './App.css';

import React, { useState, useEffect } from 'react';

const sound = ['/assets/g2.wav', '/assets/g3.wav', '/assets/a2.wav', '/assets/a3.wav', '/assets/c3.wav', '/assets/c4.wav', '/assets/d3.wav', '/assets/d4.wav', '/assets/e3.wav', '/assets/e4.wav'];
const song = ['/assets/song1.mp3', '/assets/song2.mp3'];
const inactivemon = ['/assets/g_inactive.png', '/assets/a_inactive.png', '/assets/c_inactive.png', '/assets/d_inactive.png', '/assets/e_inactive.png'];
const activemon = ['/assets/g_active.png', '/assets/a_active.png', '/assets/c_active.png', '/assets/d_active.png', '/assets/e_active.png'];


function App() {

  const [background, setBackground] = useState('/assets/firstpage.png');
  const [songChoice, setsongChoice] = useState(false);

  const handleChooseSong = (songNumber) => {
    if (songNumber === 1) {
      setBackground('/assets/bg1.png');
    } else if (songNumber === 2) {
      setBackground('/assets/bg2.png');
    }
  };

  const refreshPage = () => {
    setBackground('/assets/firstpage.png');
  };

  return (
    <div className='firstpage' style={{
      backgroundImage: `url(${background})`
    }}>

    </div>
  );
}

export default App;
