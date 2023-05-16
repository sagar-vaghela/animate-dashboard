import React from 'react'

const Mobile = () => {
  return (
   <>
   
   <div
          id="mobile-page"
          className="mobile whatwedo page fp-section fp-table"
          data-timeout="1500"
          style={{ height: "668px" }}
        >
          <div className="fp-tableCell" style={{ height: "668px" }}>
            <h2
              className="animated fadeInDown delay-0point3"
              data-animation-in="fadeInDown delay-0point3"
              data-animation-out="fadeInUp delay-0point3"
            >
              Mobile{" "}
            </h2>
            <div
              className="mobile-img img animated fadeInUp"
              data-animation-in="fadeInUp delay-0point3"
              data-animation-out="fadeInDown delay-0point3"
            >
              <img src="http://symodd.com/img/mobile-img.png" alt="Mobile" />
            </div>
            <div className="details">
              <div className="hover animated">
                <ul>
                  <li className="animated delay-0point3">USER EXPEPIENCE</li>
                  <li className="animated delay-0point6">USER INTERFACE</li>
                  <li className="animated delay-0point9">M-COMMERCE</li>
                  <li className="animated delay-1point2">MOBILE GAMING</li>
                  <li className="animated delay-1point5">RESPONSIVE WEB</li>
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
                <li className="animated delay-0point3">USER EXPEPIENCE</li>
                <li className="animated delay-0point6">USER INTERFACE</li>
                <li className="animated delay-0point9">M-COMMERCE</li>
                <li className="animated delay-1point2">MOBILE GAMING</li>
                <li className="animated delay-1point5">RESPONSIVE WEB</li>
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
                href="http://symodd.com/#/content"
                className="btn second animated fadeInUp delay-0point9"
                data-animation-in="fadeInUp delay-0point9"
                data-animation-out="fadeOutDownBig delay-0point6"
              >
                <i className="icon"></i>Content
              </a>
            </div>
            <div className="clear"></div>
          </div>
        </div>
   </>
  )
}

export default Mobile