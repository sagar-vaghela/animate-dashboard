import React from 'react'

const Home = () => {
  return (
<>
<div
          id="home-page"
          className="home page fp-section active fp-table"
          data-timeout="1800"
          style={{ height: "100vh" }}
        >
          <div className="fp-tableCell" style={{ height: "668px" }}>
            <h1
              className="animated fadeInDown delay-0point3"
              data-animation-in="fadeInDown delay-0point3"
              data-animation-out="fadeOutUp delay-1point0"
            >
              <span>symodd</span> is an Agadir based <br></br>
              <span>digital</span> &amp; <span>audiovisual production</span>
              <br></br> agency
            </h1>
            <div className="video">
              <div className="video-container">
                <iframe
                  title="iframe"
                  src="http://symodd.com/img/118125535.html"
                  width="960"
                  height="540"
                  frameBorder="0"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowFullScreen=""
                ></iframe>
              </div>
              <span className="close-video"></span>
            </div>
            <div
              className="play-video animated delay-0point6"
              data-animation-in="fadeIn delay-0point6"
              data-animation-out="fadeOut delay-0point6"
            >
              <img
                src="http://symodd.com/img/play.png"
                className="animated pulse infinite"
                alt="Play Video"
              />
            </div>
            <a
              href="http://symodd.com/#/team"
              className="scrolldown animated fadeInUp delay-1point5"
              data-animation-in="fadeInUp delay-1point5"
              data-animation-out="fadeOutDown delay-0point5"
            >
              <img
                src="http://symodd.com/img/scroll-down.png"
                alt="Scroll down"
              />
            </a>
            <div className="clear"></div>
          </div>
        </div>
</>
  )
}

export default Home