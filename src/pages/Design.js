import React from 'react'

const Design = () => {
  return (
   <>
      <div
          id="design-page"
          className="design whatwedo page fp-section fp-table"
          data-timeout="1500"
          style={{ height: "668px" }}
        >
          <div className="fp-tableCell" style={{ height: "668px" }}>
            <h2
              className="animated fadeInDown delay-0point3"
              data-animation-in="fadeInDown delay-0point3"
              data-animation-out="fadeInUp delay-0point3"
            >
              Design{" "}
            </h2>
            <div
              className="design-img img animated fadeInUp"
              data-animation-in="fadeInUp delay-0point3"
              data-animation-out="fadeInDown delay-0point3"
            >
              <img
                src="http://symodd.com/img/design-img.png"
                alt="Design Maroc Morocco"
              />
            </div>
            <div className="details">
              <div className="hover animated">
                <ul>
                  <li className="animated delay-0point3">
                    USER INTERFACE DESIGN
                  </li>
                  <li className="animated delay-0point6">
                    HUMAN-CENTERED DESIGN
                  </li>
                  <li className="animated delay-0point9">PRODUCT DESIGN</li>
                  <li className="animated delay-1point2">
                    BRANDING &amp; PACKAGING
                  </li>
                  <li className="animated delay-1point5">
                    PRINT &amp; ILLUSTRATION
                  </li>
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
                <li className="animated delay-0point3">
                  USER INTERFACE DESIGN
                </li>
                <li className="animated delay-0point6">
                  HUMAN-CENTERED DESIGN
                </li>
                <li className="animated delay-0point9">PRODUCT DESIGN</li>
                <li className="animated delay-1point2">
                  BRANDING &amp; PACKAGING
                </li>
                <li className="animated delay-1point5">
                  PRINT &amp; ILLUSTRATION
                </li>
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
                href="http://symodd.com/#/mobile"
                className="btn second animated fadeInUp delay-0point9"
                data-animation-in="fadeInUp delay-0point9"
                data-animation-out="fadeOutDownBig delay-0point6"
              >
                <i className="icon"></i>Mobile
              </a>
            </div>
            <div className="clear"></div>
          </div>
        </div>
   </>
  )
}

export default Design