import React from 'react'

const BlogPage = () => {
  return (
<>
<div
        id="blog-page"
        className="blog page fp-section fp-table"
        data-timeout="2100"
        style={{ height: "668px" }}
      >
        {/* <div className="fp-tableCell" style={{ height: "668px" }}> */}
        <h2
          className="animated fadeIn delay-0point3"
          data-animation-in="fadeIn delay-0point3"
          data-animation-out="fadeOut delay-0point3"
        >
          Blog{" "}
        </h2>

        <ul className="blog-list">
          <li
            className="date animated fadeIn delay-0point6"
            data-animation-in="fadeIn delay-0point6"
            data-animation-out="fadeOut delay-0point6"
          >
            <div className="date">07.28.2015</div>
            <a
              target="_blank"
              title="Symodd launches Visit Taghazout Community website"
              href="http://symodd.com/blog/creative-agency-agadir/symodd-launches-visit-taghazout-community-website/"
              className="title"
              rel="noreferrer"
            >
              Symodd launches Visit Taghazout Community website
            </a>
            <a
              target="_blank"
              title="Symodd launches Visit Taghazout Community website"
              href="http://symodd.com/blog/creative-agency-agadir/symodd-launches-visit-taghazout-community-website/"
              className="btn-blog"
              rel="noreferrer"
            >
              Read more
            </a>
          </li>
          <li
            className="date animated fadeIn delay-0point9"
            data-animation-in="fadeIn delay-0point6"
            data-animation-out="fadeOut delay-0point6"
          >
            <div className="date">02.12.2015</div>
            <a
              target="_blank"
              title="SYMODD wins honorable mention at the prestigious Awwwards.com"
              href="http://symodd.com/blog/creative-agency-agadir/symodd-wins-honorable-mention-on-prestigious-awwwards-com/"
              className="title"
              rel="noreferrer"
            >
              SYMODD wins honorable mention at the prestigious Awwwards.com
            </a>
            <a
              target="_blank"
              title="SYMODD wins honorable mention at the prestigious Awwwards.com"
              href="http://symodd.com/blog/creative-agency-agadir/symodd-wins-honorable-mention-on-prestigious-awwwards-com/"
              className="btn-blog"
              rel="noreferrer"
            >
              Read more
            </a>
          </li>
          <li
            className="date animated fadeIn delay-1point2"
            data-animation-in="fadeIn delay-0point6"
            data-animation-out="fadeOut delay-0point6"
          >
            <div className="date">01.27.2015</div>
            <a
              target="_blank"
              title="Launch of SYMODD’s new website and introducing new services"
              href="http://symodd.com/blog/creative-agency-agadir/launch-of-symodds-new-website-and-introducing-new-services/"
              className="title"
              rel="noreferrer"
            >
              Launch of SYMODD’s new website and introducing new services
            </a>
            <a
              target="_blank"
              title="Launch of SYMODD’s new website and introducing new services"
              href="http://symodd.com/blog/creative-agency-agadir/launch-of-symodds-new-website-and-introducing-new-services/"
              className="btn-blog"
              rel="noreferrer"
            >
              Read more
            </a>
          </li>
        </ul>
        <div className="navigation">
          <a
            href="http://symodd.com/#/contact"
            className="btn second animated fadeInUp delay-1point5"
            data-animation-in="fadeInUp delay-1point5"
            data-animation-out="fadeOutDownBig delay-1point5"
          >
            <i className="icon"></i>CONTACT
          </a>
        </div>
        <div className="clear"></div>
        {/* </div> */}
      </div>
</>
  )
}

export default BlogPage