import './App.css';

import React, { useState, useEffect, useRef } from 'react';

const sound = ['/assets/g2.wav', '/assets/g3.wav', '/assets/a2.wav', '/assets/a3.wav', '/assets/c3.wav', '/assets/c4.wav', '/assets/d3.wav', '/assets/d4.wav', '/assets/e3.wav', '/assets/e4.wav'];
const songs = ['/assets/song1.mp3', '/assets/song2.mp3'];
const inactivemon = ['/assets/g_inactive.png', '/assets/a_inactive.png', '/assets/c_inactive.png', '/assets/d_inactive.png', '/assets/e_inactive.png'];
const activemon = ['/assets/g_active.png', '/assets/a_active.png', '/assets/c_active.png', '/assets/d_active.png', '/assets/e_active.png'];
const backgrounds = ['/assets/bg1.png', '/assets/bg2.png'];

function App() {

  const [background, setBackground] = useState('/assets/firstpage.png');
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  const audioRef = useRef(null);

  // const handleChooseSong = (songNumber) => {
  //   if (songNumber === 1) {
  //     setBackground('/assets/bg1.png');
  //   } else if (songNumber === 2) {
  //     setBackground('/assets/bg2.png');
  //   }
  // };

  useEffect(() => {
    if (selectedSongIndex !== null) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      const audio = new Audio(songs[selectedSongIndex]);
      audioRef.current = audio;
      audio.play();
    }
  }, [selectedSongIndex]);

  const handleChooseSong = (index) => {
    setSelectedSongIndex(index);
    setBackground(backgrounds[index]);
  };

  const refreshPage = () => {
    setSelectedSongIndex(null);
    setBackground('/assets/firstpage.png');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const isFirstPage = background === '/assets/firstpage.png';

  return (
    <div className='firstpage' style={{
      backgroundImage: `url(${background})`
    }}>

      <div className='top'>
        {isFirstPage && (
          <>
            <div className='title'>
              <h1>Jamming Monster</h1>
            </div>
            <div className='subtitle'>
              <h3>Choose a song to start</h3>
            </div>
          </>
        )}

        <div className='songs'>
          <div
            className={`song ${selectedSongIndex === 0 ? 'active' : ''}`}
            onClick={() => handleChooseSong(0)}
          >
            <p className='songone'>Song One</p>
          </div>
          <div
            className={`song ${selectedSongIndex === 1 ? 'active' : ''}`}
            onClick={() => handleChooseSong(1)}
          >
            <p className='songtwo'>Song Two</p>
          </div>
        </div>

        {!isFirstPage && (
          <div className="back" onClick={refreshPage}>
            Go Back
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
