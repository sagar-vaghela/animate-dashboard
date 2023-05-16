import React from 'react'

const Contact = () => {
  return (
  <>
  
  <div
          id="contact-page"
          className="contact page fp-section fp-table"
          data-timeout="2100"
          style={{ height: "668px" }}
        >
          {/* <div className="fp-tableCell" style={{ height: "668px" }}> */}
          <h2
            className="animated fadeIn delay-0point3"
            data-animation-in="fadeIn delay-0point3"
            data-animation-out="fadeOut delay-0point3"
          >
            Contact us{" "}
          </h2>
          <p
            className="animated fadeIn delay-0point6"
            data-animation-in="fadeIn delay-0point6"
            data-animation-out="fadeOut delay-0point6"
          >
            we work in Agadir, a beautiful sunny town in Morocco, get in touch
            with us, even just to say hi :-){" "}
          </p>

          <a
            href="mailto:contact@symodd.com"
            className="mailto animated fadeIn delay-0point9"
            data-animation-in="fadeIn delay-0point9"
            data-animation-out="fadeOut delay-0point9"
          >
            contact@symodd.com
          </a>
          <noscript>Sorry, you need Javascript on to email us.</noscript>

          <div
            className="phone animated fadeIn delay-1point2"
            data-animation-in="fadeIn delay-1point2"
            data-animation-out="fadeOut delay-1point2"
          >
            +212 (0)6 00 64 02 21
          </div>
          <div
            className="address animated fadeIn delay-1point5"
            data-animation-in="fadeIn delay-1point5"
            data-animation-out="fadeOut delay-1point5"
          >
            Apprt. 2 sis 1er. N° 23<br></br>
            Avenue Khalid Ibn Alwalid<br></br>
            Dakhla 80000 - Agadir<br></br>
            Morocco
          </div>
          <div className="navigation">
            <a
              className="typeform-share link btn second animated fadeInUp delay-1point8"
              href="https://essbanesalim.typeform.com/to/OOTCzX"
              data-mode="2"
              target="_blank"
              data-animation-in="fadeInUp delay-1point8"
              data-animation-out="fadeOutDownBig delay-1point8"
              rel="noreferrer"
            >
              <i className="icon"></i>Send us a message Now
            </a>
          </div>
          <div className="clear"></div>
          {/* </div> */}
        </div>
  </>
  )
}

export default Contact