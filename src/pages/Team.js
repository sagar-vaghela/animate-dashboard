import React from 'react'

const Team = () => {
  return (
 <>
 
 <div
          id="team-page"
          className="team page fp-section fp-table"
          data-timeout="4300"
          style={{ height: "100vh", width:"100%" }}
        >
          {/* <div className="fp-tableCell" style={{ height: "668px" }}> */}
            <h2
              className="animated fadeIn delay-0point3"
              data-animation-in="fadeIn delay-0point3"
              data-animation-out="fadeOut delay-2point4"
            >
              Who We Are ?
            </h2>
            <p
              className="animated fadeIn delay-0point6"
              data-animation-in="fadeIn delay-0point6"
              data-animation-out="fadeOut delay-2point1"
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "justify",
              }}
            >
              SYMODD creative Agency / we are a digital creative agency
              specialized in digital creation. Our main strength is in giving
              hands to brands express themselves in emotions and digital modern
              ways.<br></br>We struggle to bring up innovation and growth
              hacking ideology to create the ultimate digital experience to
              organizations by putting our hands together with our customers to
              develop their marketing and communication skills and overcome any
              impediments that may occur at anytime, at the same time, we make
              sure that all the process doesnt affect or lessen their DNA in any
              way.{" "}
            </p>
            <ul className="team-list">
              <li
                className="animated fadeIn delay-0point9"
                data-animation-in="fadeIn delay-0point9"
                data-animation-out="fadeOut delay-1point8"
              >
                <img
                  src="http://symodd.com/img/salim-essbane.png"
                  alt="Salim Essbane SYMODD"
                />
                <h3>
                  Salim<br></br> Es-sbane
                </h3>
                <i>
                  General<br></br> Manager
                </i>
              </li>
              <li
                className="animated fadeIn delay-1point2"
                data-animation-in="fadeIn delay-1point2"
                data-animation-out="fadeOut delay-1point5"
              >
                <img
                  src="http://symodd.com/img/abdellatif-bennani-smires.png"
                  alt="Abdellatif Bennani Smires SYMODD"
                />
                <h3>
                  Abdellatif<br></br> Bennani Smires
                </h3>
                <i>
                  Production<br></br> Manager
                </i>
              </li>
              <li
                className="animated fadeIn delay-1point5"
                data-animation-in="fadeIn delay-1point5"
                data-animation-out="fadeOut delay-1point2"
              >
                <img
                  src="http://symodd.com/img/mehdi-ayache.png"
                  alt="Mehdi Ayache SYMODD"
                />
                <h3>
                  Mehdi<br></br> Ayache
                </h3>
                <i>
                  Creative Director<br></br> &amp; Digital Production Manager
                </i>
              </li>
              <li
                className="animated fadeIn delay-1point8"
                data-animation-in="fadeIn delay-1point8"
                data-animation-out="fadeOut delay-0point9"
              >
                <img
                  src="http://symodd.com/img/aissa-bouguern.png"
                  alt="Aissa Bouguern SYMODD"
                />
                <h3>
                  Aissa<br></br> Bouguern
                </h3>
                <i>
                  Senior Front-end<br></br> Developer
                </i>
              </li>
              <li
                className="animated fadeIn delay-2point1"
                data-animation-in="fadeIn delay-2point1"
                data-animation-out="fadeOut delay-0point6"
              >
                <img
                  src="http://symodd.com/img/safia-bahi.png"
                  alt="Safia Bahi SYMODD"
                />
                <h3>
                  Safia<br></br> Bahi
                </h3>
                <i>
                  Marketing &amp; Communication<br></br> Assistant
                </i>
              </li>
            </ul>
            <div className="navigation">
              <a
                href="http://symodd.com/#/audiovisual"
                className="btn second animated fadeInUp delay-3point3"
                data-animation-in="fadeInUp delay-3point3"
                data-animation-out="fadeOutDown delay-3point3"
              >
                <i className="icon"></i>What We Do ?
              </a>
            </div>
            <div className="clear"></div>
          {/* </div> */}
        </div>
 </>
  )
}

export default Team