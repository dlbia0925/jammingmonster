import './App.css';

import React, { useState, useEffect, useRef } from 'react';

// const sound = ['/assets/g2.wav', '/assets/g3.wav', '/assets/a2.wav', '/assets/a3.wav', '/assets/c3.wav', '/assets/c4.wav', '/assets/d3.wav', '/assets/d4.wav', '/assets/e3.wav', '/assets/e4.wav'];
// const songs = ['/assets/song1.mp3', '/assets/song2.mp3'];
// const inactivemon = ['/assets/g_inactive.png', '/assets/a_inactive.png', '/assets/c_inactive.png', '/assets/d_inactive.png', '/assets/e_inactive.png'];
// const activemon = ['/assets/g_active.png', '/assets/a_active.png', '/assets/c_active.png', '/assets/d_active.png', '/assets/e_active.png'];
// const backgrounds = ['/assets/bg1.png', '/assets/bg2.png'];

const sound = [
  process.env.PUBLIC_URL + '/assets/g2.wav',
  process.env.PUBLIC_URL + '/assets/g3.wav',
  process.env.PUBLIC_URL + '/assets/a2.wav',
  process.env.PUBLIC_URL + '/assets/a3.wav',
  process.env.PUBLIC_URL + '/assets/c3.wav',
  process.env.PUBLIC_URL + '/assets/c4.wav',
  process.env.PUBLIC_URL + '/assets/d3.wav',
  process.env.PUBLIC_URL + '/assets/d4.wav',
  process.env.PUBLIC_URL + '/assets/e3.wav',
  process.env.PUBLIC_URL + '/assets/e4.wav',
];

const songs = [
  process.env.PUBLIC_URL + '/assets/song1.mp3',
  process.env.PUBLIC_URL + '/assets/song2.mp3'
];

const inactivemon = [
  process.env.PUBLIC_URL + '/assets/g_inactive.png',
  process.env.PUBLIC_URL + '/assets/a_inactive.png', 
  process.env.PUBLIC_URL + '/assets/c_inactive.png',
  process.env.PUBLIC_URL + '/assets/d_inactive.png',
  process.env.PUBLIC_URL + '/assets/e_inactive.png'
];

const activemon = [
  process.env.PUBLIC_URL + '/assets/g_active.png',
  process.env.PUBLIC_URL + '/assets/a_active.png', 
  process.env.PUBLIC_URL + '/assets/c_active.png', 
  process.env.PUBLIC_URL + '/assets/d_active.png', 
  process.env.PUBLIC_URL + '/assets/e_active.png'
];

const backgrounds = [
  process.env.PUBLIC_URL + '/assets/bg1.png',
  process.env.PUBLIC_URL + '/assets/bg2.png'
];

function App() {

  const [background, setBackground] = useState(process.env.PUBLIC_URL + '/assets/firstpage.png');
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  const audioRef = useRef(null);
  const gAudioRef = useRef(null);
  const [isGActive, setIsGActive] = useState(false);
  const [isAActive, setIsAActive] = useState(false);
  const [isCActive, setIsCActive] = useState(false);
  const [isDActive, setIsDActive] = useState(false);
  const [isEActive, setIsEActive] = useState(false);

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
      audio.loop = true;
      audioRef.current = audio;
      audio.play();
    }
  }, [selectedSongIndex]);

  // G
  useEffect(() => {
    const keysDown = {};

    const handleKeyDown = (e) => {
      if ((e.key === 'q' || e.key === 'j') && !keysDown[e.key]) {
        keysDown[e.key] = true;
        setIsGActive(true);

        let soundPath = '';
        if (e.key === 'q') soundPath = sound[0]; // g2.wav
        else if (e.key === 'j') soundPath = sound[1]; // g3.wav

        const audio = new Audio(soundPath);
        gAudioRef.current = audio;
        audio.play().catch((error) => {
          console.warn('Play interrupted:', error);
        });
        audio.onended = () => {
        };
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'q' || e.key === 'j') {
        keysDown[e.key] = false;
        setIsGActive(false);

        // if (gAudioRef.current) {
        //   gAudioRef.current.pause();
        //   gAudioRef.current.currentTime = 0;
        // }
      }
    };

    if (selectedSongIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedSongIndex]);
  // G

  // A
  useEffect(() => {
    const keysDown = {};

    const handleKeyDown = (e) => {
      if ((e.key === 'w' || e.key === 'i') && !keysDown[e.key]) {
        keysDown[e.key] = true;
        setIsAActive(true);

        let soundPath = '';
        if (e.key === 'w') soundPath = sound[2]; // a2.wav
        else if (e.key === 'i') soundPath = sound[3]; // a3.wav

        const audio = new Audio(soundPath);
        gAudioRef.current = audio;
        audio.play().catch((error) => {
          console.warn('Play interrupted:', error);
        });
        audio.onended = () => {
        };
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'w' || e.key === 'i') {
        keysDown[e.key] = false;
        setIsAActive(false);

        // if (gAudioRef.current) {
        //   gAudioRef.current.pause();
        //   gAudioRef.current.currentTime = 0;
        // }
      }
    };

    if (selectedSongIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedSongIndex]);
  // A

  // C
  useEffect(() => {
    const keysDown = {};

    const handleKeyDown = (e) => {
      if ((e.key === 'e' || e.key === 'o') && !keysDown[e.key]) {
        keysDown[e.key] = true;
        setIsCActive(true);

        let soundPath = '';
        if (e.key === 'e') soundPath = sound[4]; // c2.wav
        else if (e.key === 'o') soundPath = sound[5]; // c3.wav

        const audio = new Audio(soundPath);
        gAudioRef.current = audio;
        audio.play().catch((error) => {
          console.warn('Play interrupted:', error);
        });
        audio.onended = () => {
        };
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'e' || e.key === 'o') {
        keysDown[e.key] = false;
        setIsCActive(false);

        // if (gAudioRef.current) {
        //   gAudioRef.current.pause();
        //   gAudioRef.current.currentTime = 0;
        // }
      }
    };

    if (selectedSongIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedSongIndex]);
  // C

  // D
  useEffect(() => {
    const keysDown = {};

    const handleKeyDown = (e) => {
      if ((e.key === 'r' || e.key === 'p') && !keysDown[e.key]) {
        keysDown[e.key] = true;
        setIsDActive(true);

        let soundPath = '';
        if (e.key === 'r') soundPath = sound[6]; // d2.wav
        else if (e.key === 'p') soundPath = sound[7]; // d3.wav

        const audio = new Audio(soundPath);
        gAudioRef.current = audio;
        audio.play().catch((error) => {
          console.warn('Play interrupted:', error);
        });
        audio.onended = () => {
        };
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'r' || e.key === 'p') {
        keysDown[e.key] = false;
        setIsDActive(false);

        // if (gAudioRef.current) {
        //   gAudioRef.current.pause();
        //   gAudioRef.current.currentTime = 0;
        // }
      }
    };

    if (selectedSongIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedSongIndex]);
  // D

  // E
  useEffect(() => {
    const keysDown = {};

    const handleKeyDown = (e) => {
      if ((e.key === 'f' || e.key === '[') && !keysDown[e.key]) {
        keysDown[e.key] = true;
        setIsEActive(true);

        let soundPath = '';
        if (e.key === 'f') soundPath = sound[8]; // e2.wav
        else if (e.key === '[') soundPath = sound[9]; // e3.wav

        const audio = new Audio(soundPath);
        gAudioRef.current = audio;
        audio.play().catch((error) => {
          console.warn('Play interrupted:', error);
        });
        audio.onended = () => {
        };
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'f' || e.key === '[') {
        keysDown[e.key] = false;
        setIsEActive(false);

        // if (gAudioRef.current) {
        //   gAudioRef.current.pause();
        //   gAudioRef.current.currentTime = 0;
        // }
      }
    };

    if (selectedSongIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedSongIndex]);
  // E

  const handleChooseSong = (index) => {
    setSelectedSongIndex(index);
    setBackground(backgrounds[index]);
  };

  const refreshPage = () => {
    setSelectedSongIndex(null);
    setBackground(process.env.PUBLIC_URL + '/assets/firstpage.png');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const isFirstPage = background === process.env.PUBLIC_URL + '/assets/firstpage.png';

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

        {/* G */}
        {selectedSongIndex !== null && (
          <div className="g">
            <img
              src={isGActive ? activemon[0] : inactivemon[0]}
              alt="G Mon"
            />
          </div>
        )}

        {/* A */}
        {selectedSongIndex !== null && (
          <div className="a">
            <img
              src={isAActive ? activemon[1] : inactivemon[1]}
              alt="A Mon"
            />
          </div>
        )}

        {/* C */}
        {selectedSongIndex !== null && (
          <div className="c">
            <img
              src={isCActive ? activemon[2] : inactivemon[2]}
              alt="C Mon"
            />
          </div>
        )}

        {/* D */}
        {selectedSongIndex !== null && (
          <div className="d">
            <img
              src={isDActive ? activemon[3] : inactivemon[3]}
              alt="D Mon"
            />
          </div>
        )}

        {/* E */}
        {selectedSongIndex !== null && (
          <div className="e">
            <img
              src={isEActive ? activemon[4] : inactivemon[4]}
              alt="E Mon"
            />
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
