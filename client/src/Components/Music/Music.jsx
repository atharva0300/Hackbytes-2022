import React from 'react'
import TimeLine1 from './TimeLine1';
import TimeLine2 from './TimeLine2';
import './musicStyles.css';


function Music() {
  return (
    <div className = "music">
        <TimeLine1 />
        <TimeLine2 />
    </div>
  )
}

export default Music