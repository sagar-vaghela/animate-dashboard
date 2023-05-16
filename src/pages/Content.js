import React from 'react'

const Content = () => {
  return (
    <>
     <div
          id="content-page"
          className="content whatwedo page fp-section fp-table"
          data-timeout="1500"
          style={{ height: "668px" }}
        >
          <div className="fp-tableCell" style={{ height: "668px" }}>
            <h2
              className="animated fadeInDown delay-0point3"
              data-animation-in="fadeInDown delay-0point3"
              data-animation-out="fadeInUp delay-0point3"
            >
              Content{" "}
            </h2>
            <div
              className="content-img img animated fadeInUp"
              data-animation-in="fadeInUp delay-0point3"
              data-animation-out="fadeInDown delay-0point3"
            >
              <img src="http://symodd.com/img/content.png" alt="Content" />
            </div>
            <div className="details">
              <div className="hover animated">
                <ul>
                  <li className="animated delay-0point3">PRESS RELEASE</li>
                  <li className="animated delay-0point6">BRAND CONTENT</li>
                  <li className="animated delay-0point9">EDITORIAL STRATEGY</li>
                  <li className="animated delay-1point2">PUBLISHING</li>
                  <li className="animated delay-1point5">CURATION</li>
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
                <li className="animated delay-0point3">PRESS RELEASE</li>
                <li className="animated delay-0point6">BRAND CONTENT</li>
                <li className="animated delay-0point9">EDITORIAL STRATEGY</li>
                <li className="animated delay-1point2">PUBLISHING</li>
                <li className="animated delay-1point5">CURATION</li>
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
                href="http://symodd.com/#/advertising"
                className="btn second animated fadeInUp delay-0point9"
                data-animation-in="fadeInUp delay-0point9"
                data-animation-out="fadeOutDownBig delay-0point6"
              >
                <i className="icon"></i> Advertising
              </a>
            </div>
            <div className="clear"></div>
          </div>
        </div>
    </>
  )
}

export default Content