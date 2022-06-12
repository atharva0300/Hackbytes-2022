import React from 'react'
import './timeLine-2.css';

function TimeLine2() {



//   $('.slide').hiSlide();


  return (
    <div className='TimeLine2 w-screen h-screen bg-green-500 flex flex-row justify-center'>
        <div class = "container3">
            <div class = "box">
                <span></span>
                <div class = "content">
                    <h2>Kid</h2>
                    <img src = {require('./Images/3.jpg')}></img>
                    <a href = "#">Read More</a>
                </div>
            </div>

            <div class = "box">
                <span></span>
                <div class = "content">
                  <h2>Teenager</h2>
                    <img src = {require('./Images/4.jpg')}></img>
                    <a href = "#">Read More</a>
                </div>
            </div>

            <div class = "box">
                <span></span>
                <div class = "content">
                    <h2>Adult</h2>
                    <img src = {require('./Images/5.jpg')}></img>
                    <a href = "#">Read More</a>
                </div>
            </div>
        </div>

    </div>
    /* 360/17 = 21.17 deg */
  )
}

export default TimeLine2

/*
 const playFurElise = () => {
   setTimeout(() => {
      playSound(E5);
   }, 0)

   setTimeout(() => {
    playSound(Eb5);
   }, 300)
   
   setTimeout(() => {
    playSound(E5);
   }, 600)

   setTimeout(() => {
    playSound(Eb5);
   }, 900);

   setTimeout(() => {
    playSound(E5);
   }, 1200);


   setTimeout(() => {
    playSound(Eb5);
   }, 1500);

   setTimeout(() => {
    playSound(E5);
   }, 1800);

   setTimeout(() => {
    playSound(B4);
   }, 2100);

   setTimeout(() => {
    playSound(D5);
   }, 2400);

   setTimeout(() => {
    playSound(C5);
   }, 2700);

   setTimeout(() => {
    playSound(A4);
   }, 3000);

   setTimeout(() => {
     playSound(C4);
   }, 4000);

   setTimeout(() => {
     playSound(E4);
   }, 4300);

   setTimeout(() => {
     playSound(A4);
   }, 4600);

   setTimeout(() => {
    playSound(B4);
   }, 4900);

   setTimeout(() => {
    playSound(E4);
   }, 6000);

   setTimeout(() => {
    playSound(Ab4)
   }, 6300);

   setTimeout(() => {
     playSound(B4);
   }, 6600);

   setTimeout(() => {
     playSound(C5);
   }, 6900);

   setTimeout(() => {
     playSound(E4);
   }, 8000);

   setTimeout(() => {
    playSound(E5);
 }, 8300)

 setTimeout(() => {
  playSound(Eb5);
 }, 8600)
 
 setTimeout(() => {
  playSound(E5);
 }, 8900)

 setTimeout(() => {
  playSound(Eb5);
 }, 9100);

 setTimeout(() => {
  playSound(E5);
 }, 9400);


 setTimeout(() => {
  playSound(Eb5);
 }, 9700);

 setTimeout(() => {
  playSound(E5);
 }, 10000);

 setTimeout(() => {
  playSound(B4);
 }, 10300);

 setTimeout(() => {
  playSound(D5);
 }, 10600);

 setTimeout(() => {
  playSound(C5);
 }, 10900);

 setTimeout(() => {
  playSound(A4);
 }, 12000);

}

*/

/*

          <div className='keyboard2 rounded-xl'>
            <span className='white-button1'></span>
            <span className='black-button1'></span>
            <span className='white-button2'></span>
            <span className='black-button2'></span>
            <span className='white-button3'></span>
            <span className='white-button4'></span>
            <span className='black-button3'></span>
            <span className='white-button5'></span>
            <span className='black-button4'></span>
            <span className='white-button6'></span>
            <span className='black-button5'></span>
            <span className='white-button7'></span>
            <span className='white-button8'></span>
            <span className='black-button6'></span>
            <span className='white-button9'></span>
            <span className='black-button7'></span>
            <span className='white-button10'></span>
          </div>
    */
