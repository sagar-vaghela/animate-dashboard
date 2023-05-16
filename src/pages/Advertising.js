import React from "react";

const Advertising = () => {
  return (
    <>
      <div
        id="advertising-page"
        className="advertising whatwedo page fp-section fp-table"
        data-timeout="1500"
        style={{ height: "668px" }}
      >
        <div className="fp-tableCell" style={{ height: "668px" }}>
          <h2
            className="animated fadeInDown delay-0point3"
            data-animation-in="fadeInDown delay-0point3"
            data-animation-out="fadeInUp delay-0point3"
          >
            Advertising{" "}
          </h2>
          <div
            className="advertising-img img animated fadeInUp"
            data-animation-in="fadeInUp delay-0point3"
            data-animation-out="fadeInDown delay-0point3"
          >
            <img src="http://symodd.com/img/displaying.png" alt="Display" />
          </div>
          <div className="details">
            <div className="hover animated">
              <ul>
                <li className="animated delay-0point3">DIGITAL CAMPAIGN</li>
                <li className="animated delay-0point6">SEO &amp; SMO</li>
                <li className="animated delay-0point9">BRAND STRATEGY</li>
                <li className="animated delay-1point2">EVENTS &amp; DISPLAY</li>
                <li className="animated delay-1point5">STREET MARKETING</li>
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
              <li className="animated delay-0point3">DIGITAL CAMPAIGN</li>
              <li className="animated delay-0point6">SEO &amp; SMO</li>
              <li className="animated delay-0point9">BRAND STRATEGY</li>
              <li className="animated delay-1point2">EVENTS &amp; DISPLAY</li>
              <li className="animated delay-1point5">STREET MARKETING</li>
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
              title="Visit our Blog SYMODD"
              href="http://symodd.com/blog"
              target="_blank"
              className="btn second animated fadeInUp delay-0point9"
              data-animation-in="fadeInUp delay-0point6"
              data-animation-out="fadeOutDownBig delay-0point6"
              rel="noreferrer"
            >
              <i className="icon"></i>Blog www.symodd.com/blog
            </a>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </>
  );
};

export default Advertising;
