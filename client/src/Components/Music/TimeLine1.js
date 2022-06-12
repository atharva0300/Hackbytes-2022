import React from 'react'
import './musicStyles.css';
import './timeLineStyles.css';
import { useState } from 'react';
import { useRef } from 'react';
import { createRef } from 'react';

function TimeLine1() {
  const C4 = new Audio(require('./Sounds/C4.mp3'));
  const Db4 = new Audio(require("./Sounds/Db4.mp3"));
  const D4 = new Audio(require("./Sounds/D4.mp3"));
  const Eb4 = new Audio(require("./Sounds/Eb4.mp3"));
  const E4 = new Audio(require("./Sounds/E4.mp3"));
  const F4 = new Audio(require("./Sounds/F4.mp3"));
  const Gb4 = new Audio(require("./Sounds/Gb4.mp3"));
  const G4 = new Audio(require("./Sounds/G4.mp3"));
  const Ab4 = new Audio(require("./Sounds/Ab4.mp3"));
  const A4 = new Audio(require("./Sounds/A4.mp3"));
  const Bb4 = new Audio(require("./Sounds/Bb4.mp3"));
  const B4 = new Audio(require("./Sounds/B4.mp3"));
  const C5 = new Audio(require("./Sounds/C5.mp3"));
  const Db5 = new Audio(require("./Sounds/Db5.mp3"));
  const D5 = new Audio(require("./Sounds/D5.mp3"));
  const Eb5 = new Audio(require("./Sounds/Eb5.mp3"));
  const E5 = new Audio(require("./Sounds/E5.mp3"));

  const playSound = audio => {
     const clone = audio.cloneNode();
     clone.play();
     setTimeout(() => {
       clone.volume = 0.8
     }, 400);

     setTimeout(() => {
      clone.volume = 0.6
    }, 800);

    setTimeout(() => {
      clone.volume = 0.4
    }, 1200);

    setTimeout(() => {
      clone.volume = 0.2
    }, 1600);

    setTimeout(() => {
      clone.volume = 0.0
    }, 2000);
  }

  // keys 
  const [C4Key , toggleC4key] = useState(false);
  const [Db4Key , toggleDb4key] = useState(false);
  const [D4Key , toggleD4key] = useState(false);
  const [Eb4Key , toggleEb4key] = useState(false);
  const [E4Key , toggleE4key] = useState(false);
  const [F4Key , toggleF4key] = useState(false);
  const [Gb4Key , toggleGb4key] = useState(false);
  const [G4Key , toggleG4key] = useState(false);
  const [Ab4Key , toggleAb4key] = useState(false);
  const [A4Key , toggleA4key] = useState(false);
  const [Bb4Key , toggleBb4key] = useState(false);
  const [B4Key , toggleB4key] = useState(false);
  const [C5Key , toggleC5key] = useState(false);
  const [Db5Key , toggleDb5key] = useState(false);
  const [D5Key , toggleD5key] = useState(false);
  const [Eb5Key , toggleEb5key] = useState(false);
  const [E5Key , toggleE5key] = useState(false);

  //refs 
  const blackBtnDepth = createRef();
  const blackBtnSide = createRef();

  const playC4 = (e) => {
    playSound(C4);
    toggleC4key(true);
    setTimeout(() => {
        toggleC4key(false);
    }, 200);
  }

  const playDb4 = (e) => {
    console.log('inside playDb4')
    playSound(Db4);
    toggleDb4key(true);
    blackBtnDepth.current.click();
    blackBtnSide.current.click();
    console.log(blackBtnDepth.current);
    console.log(e);
    setTimeout(() => {
        toggleDb4key(false);
    }, 200);
  }

  const playD4 = (e) => {
    playSound(D4);
    toggleC4key(true);
    blackBtnDepth.current.click();
    blackBtnSide.current.click();
    setTimeout(() => {
        toggleC4key(false);
    }, 200);
  }

  const playEb4 = (e) => {
    playSound(Eb4);
    toggleC4key(true);
    setTimeout(() => {
        toggleC4key(false);
    }, 200);
  }

  const playE4 = (e) => {
    playSound(E4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playF4 = (e) => {
    playSound(F4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playGb4 = (e) => {
    playSound(Gb4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playG4 = (e) => {
    playSound(G4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playAb4 = (e) => {
    playSound(Ab4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playA4 = (e) => {
    playSound(A4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playBb4 = (e) => {
    playSound(Bb4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playB4 = (e) => {
    playSound(B4);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playC5 = (e) => {
    playSound(C5);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playDb5 = (e) => {
    playSound(Db5);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playD5 = (e) => {
    playSound(D5);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playEb5 = (e) => {
    playSound(Eb5);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }

  const playE5 = (e) => {
    playSound(E5);
    toggleC4key(true);
    const temp = e.target.className;
    e.target.className += ' active';
    setTimeout(() => {
        toggleC4key(false);
        e.target.className = temp;
    }, 200);
  }



  return (
    <div className='Timeline1 w-screen h-screen flex flex-row justify-between'>
          <div className='card mt-24'>
            <div className='wrapper2'>
              <div className='content'>
                <span className='heading text-fuchsia-700'>Playing the Piano</span>
                <span className='date text-fuchsia-700'>Since 2nd grade!</span>
              </div>
              <div className='details'>
                  <p className='text-black'>Belonging from a family of musicians, I always had that deep inclination towards playing the piano. Since when I was a kid, the immense feel of joy and happinnes that I felt towards piano is unparalleled to any other actiity. Even Till date I get the same feeling when I play the piano.</p>
                </div>
            </div>
          </div>

          <div className='title text-cyan-400 font-semibold text-6xl mt-12'>
            <span className='text-5xl'>Why don't you try playing the piano !</span>
          </div> 

          <div className='keyboard-container'>

          </div>

        <div className='keyboard self-center rounded-2xl'>

            <button className='white-btn C4' onClick={(e) => playC4(e)}></button>
            <span className='Db4' onClick = {(e) => playDb4(e)}>
              <button className='black-btn Db4'></button>
              <button className='black-btn-depth-Db4'></button>
              <button className='black-btn-side-Db4'></button>
            </span>
            <button className='white-btn D4' onClick={(e) => playD4(e)}></button>
            <span className='Eb4' onClick={(e) => playEb4(e)}>
              <button className='black-btn Eb4'></button>
              <button className='black-btn-depth-Eb4'></button>
              <button className='black-btn-side-Eb4'></button>
            </span>
            
            <button className='white-btn E4' onClick={(e) => playE4(e)}></button>
            <button className='white-btn F4' onClick={(e) => playF4(e)}></button>
            <span className='Gb4' onClick={(e) => playGb4(e)}>
              <button className='black-btn Gb4'></button>
              <button className='black-btn-depth-Gb4'></button>
              <button className='black-btn-side-Gb4'></button>
            </span>
            <button className='white-btn G4' onClick={(e) => playG4(e)}></button>
            <span className='Ab4' onClick={(e) => playAb4(e)}>
              <button className='black-btn Ab4'></button>
              <button className='black-btn-depth-Ab4'></button>
              <button className='black-btn-side-Ab4'></button>
            </span>
            <button className='white-btn A4' onClick={(e) => playA4(e)}></button>
            <span className='Bb4' onClick = {(e) => playBb4(e)}>
              <button className='black-btn Bb4'></button>
              <button className='black-btn-depth-Bb4'></button>
              <button className='black-btn-side-Bb4'></button>
            </span>
            <button className='white-btn B4' onClick = {(e) => playB4(e)}></button>
            <button className='white-btn C5' onClick={(e) => playC5(e)}></button>
            <span className='Db5' onClick = {(e) => playDb5(e)}>
              <button className='black-btn Db5'></button>
              <button className='black-btn-depth-Db5'></button>
              <button className='black-btn-side-Db5'></button>
            </span>
            <button className='white-btn D5' onClick={(e) => playD5(e)}></button>
            <span className='Eb5' onClick={(e) => playEb5(e)}>
                <button className='black-btn Eb5' onClick = {(e) => playEb5(e)}></button>
                <button className='black-btn-depth-Eb5'></button>
                <button className='black-btn-side-Eb5'></button>
            </span>
            <button className='white-btn E5' onClick={(e) => playE5(e)}></button>
        </div>
    </div>
  )
}

export default TimeLine1