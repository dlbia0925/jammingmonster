import './App.css';

import React, { useState, useEffect } from 'react';

const sound = ['public/assets/g2.wav', 'public/assets/g3.wav', 'public/assets/a2.wav', 'public/assets/a3.wav', 'public/assets/c3.wav', 'public/assets/c4.wav', 'public/assets/d3.wav', 'public/assets/d4.wav', 'public/assets/e3.wav', 'public/assets/e4.wav'];
const song = ['public/assets/song1.mp3', 'public/assets/song2.mp3'];
const inactivemon = ['public/assets/g_inactive.png', 'public/assets/a_inactive.png', 'public/assets/c_inactive.png', 'public/assets/d_inactive.png', 'public/assets/e_inactive.png'];
const activemon = ['public/assets/g_active.png', 'public/assets/a_active.png', 'public/assets/c_active.png', 'public/assets/d_active.png', 'public/assets/e_active.png'];


function App() {

  const [background, setBackground] = useState('public/assets/firstpage.png');

  return (

  );
}

export default App;
