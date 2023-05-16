import React from 'react'

const Web = () => {
  return (
   
    <>
     <div
          id="web-page"
          className="web whatwedo page fp-section fp-table"
          data-timeout="1500"
          style={{ height: "668px" }}
        >
          <div className="fp-tableCell" style={{ height: "668px" }}>
            <h2
              className="animated fadeInDown delay-0point3"
              data-animation-in="fadeInDown delay-0point3"
              data-animation-out="fadeInUp delay-0point3"
            >
              Web{" "}
            </h2>
            <div
              className="laptop img animated fadeInUp"
              data-animation-in="fadeInUp delay-0point3"
              data-animation-out="fadeInDown delay-0point3"
            >
              <img src="http://symodd.com/img/laptop-img.png" alt="Laptop" />
            </div>
            <div className="details">
              <div className="hover animated">
                <ul>
                  <li className="animated delay-0point3">CMS DEVELOPMENT</li>
                  <li className="animated delay-0point6">
                    CUSTOM/RICH DEVELOPMENT
                  </li>
                  <li className="animated delay-0point9">
                    FRONT-END DEVELOPMENT
                  </li>
                  <li className="animated delay-1point2">WEB APPLICATIONS</li>
                  <li className="animated delay-1point5">E-COMMERCE</li>
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
                <li className="animated delay-0point3">CMS DEVELOPMENT</li>
                <li className="animated delay-0point6">
                  CUSTOM/RICH DEVELOPMENT
                </li>
                <li className="animated delay-0point9">
                  FRONT-END DEVELOPMENT
                </li>
                <li className="animated delay-1point2">WEB APPLICATIONS</li>
                <li className="animated delay-1point5">E-COMMERCE</li>
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
                href="http://symodd.com/#/design"
                className="btn second animated fadeInUp delay-0point9"
                data-animation-in="fadeInUp delay-0point9"
                data-animation-out="fadeOutDownBig delay-0point6"
              >
                <i className="icon"></i> Design
              </a>
            </div>
            <div className="clear"></div>
          </div>
        </div>
    </>
  )
}

export default Web