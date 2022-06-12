import React from 'react'
import Neymar from "../../Images/6.png";
import Ronaldo from "../../Images/ronaldo.png";
import Messi from "../../Images/messi.png";
import MU from "../../Images/MU.png";
import LFC from "../../Images/LFC.png";
import "../Sports/sports.css";
function Sports() {
  return (
    <>
   
    <section className="section about" id="about">
    <div className="title-1">
      <h2 className='header-line mb-5'>Favourite Players</h2>
    </div>
    <div className="about-center container">
      <div className="row">
        <div className="col col-md-6 col-lg-6 col-sm-12 col-xs-12 left  ">
          <img src={Neymar} alt="" />
        </div>
        <div className="col col-md-6 col-lg-6 col-sm-12 col-xs-12">
          <h2>Nemar</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            voluptate! Mollitia, perspiciatis praesentium. Consequatur
            necessitatibus iste mollitia, velit, maiores vel odit harum,
            eaque dolore quo similique possimus impedit praesentium placeat!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            voluptate! Mollitia, perspiciatis praesentium. Consequatur
            necessitatibus iste mollitia, velit, maiores vel odit harum,
            eaque dolore quo similique possimus impedit praesentium placeat!
          </p>
        </div>
      </div>     
    </div>
    
    <div className="about-center container">
        <div className="row">
          <div className="col col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <h2> Ronaldo</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Modi, voluptate! Mollitia, perspiciatis praesentium.
              Consequatur necessitatibus iste mollitia, velit, maiores vel
              odit harum, eaque dolore quo similique possimus impedit
              praesentium placeat!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Modi, voluptate! Mollitia, perspiciatis praesentium.
              Consequatur necessitatibus iste mollitia, velit, maiores vel
              odit harum, eaque dolore quo similique possimus impedit
              praesentium placeat!
            </p>
          </div>
          <div className="col col-md-6 col-lg-6 col-sm-12 col-xs-12 left  ">
            <img src={Ronaldo} alt="" />
          </div>
        </div>
      </div>
      <div className="about-center container">
        <div className="row">
          <div className="col col-md-6 col-lg-6 col-sm-12 col-xs-12 left  ">
            <img src={Messi} alt="" />
          </div>
          <div className="col col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <h2>Messi</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Modi, voluptate! Mollitia, perspiciatis praesentium.
              Consequatur necessitatibus iste mollitia, velit, maiores vel
              odit harum, eaque dolore quo similique possimus impedit
              praesentium placeat!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Modi, voluptate! Mollitia, perspiciatis praesentium.
              Consequatur necessitatibus iste mollitia, velit, maiores vel
              odit harum, eaque dolore quo similique possimus impedit
              praesentium placeat!
            </p>
          </div>
        </div>
      </div>        
  </section>

  <section className="section them mb-5" >
            <div className="title-1">
                <h2>Favourite Teams</h2>
            </div>
            <div className="team-center container">
                <div className="team">
                    <div className="img-cover">
                        <img src={MU} alt=""/>
                    </div>
                    <h3>Manchester United</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consectetur.
                    </p>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="team">
                    <div className="img-cover">
                        <img src={LFC} alt=""/>
                    </div>
                    <h3>Liverpool FC</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consectetur.
                    </p>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                
            </div>
        </section>
  </>
  )
}

export default Sports