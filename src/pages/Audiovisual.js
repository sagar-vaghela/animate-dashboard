import React from 'react'

const Audiovisual = () => {
  return (
 <>
  <div
          id="audiovisual-page"
          className="audiovisual whatwedo page fp-section fp-table"
          data-timeout="1500"
          style={{ height: "668px" }}
        >
          <div className="fp-tableCell" style={{ height: "668px" }}>
            <h2
              className="animated fadeInDown delay-0point3"
              data-animation-in="fadeInDown delay-0point3"
              data-animation-out="fadeInUp delay-0point3"
            >
              Audiovisual{" "}
            </h2>
            <div
              className="camera img animated fadeInUp"
              data-animation-in="fadeInUp delay-0point3"
              data-animation-out="fadeInDown delay-0point3"
            >
              <img src="http://symodd.com/img/camera-img.png" alt="Camera" />
            </div>
            <div className="details">
              <div className="hover animated">
                <ul>
                  <li className="animated delay-0point3">VIDEO PRODUCTION</li>
                  <li className="animated delay-0point6">PHOTOGRAPHY</li>
                  <li className="animated delay-0point9">DOCUMENTARY</li>
                  <li className="animated delay-1point2">VISUAL EFFECTS</li>
                  <li className="animated delay-1point5">MOTION DESIGN</li>
                </ul>
              </div>
              <div className="open-link">
                <span className="action">Details</span>
                <span className="icon"></span>
              </div>
            </div>
            <div className="mobile-details">
              <div className="close"></div>
              <ul>
                <li className="animated delay-0point3">VIDEO PRODUCTION</li>
                <li className="animated delay-0point6">PHOTOGRAPHY</li>
                <li className="animated delay-0point9">DOCUMENTARY</li>
                <li className="animated delay-1point2">VISUAL EFFECTS</li>
                <li className="animated delay-1point5">MOTION DESIGN</li>
              </ul>
            </div>
            <div
              className="mobile-more animated fadeIn delay-2point4"
              data-animation-in="fadeIn delay-2point4"
              data-animation-out="fadeOut delay-2point4"
            >
              Show
            </div>

            <div className="navigation">
              <a
                href="http://symodd.com/#/web"
                className="btn second animated fadeInUp delay-0point9"
                data-animation-in="fadeInUp delay-0point9"
                data-animation-out="fadeOutDownBig delay-0point6"
              >
                <i className="icon"></i>Web
              </a>
            </div>
            <div className="clear"></div>
          </div>
        </div>
 </>
  )
}

export default Audiovisual