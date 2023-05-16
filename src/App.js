import React from "react";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Audiovisual from "./pages/Audiovisual";
import Web from "./pages/Web";
import Design from "./pages/Design";
import Mobile from "./pages/Mobile";
import Content from "./pages/Content";

import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <div id="gradient-1" className="gradient animated fadeIn"></div>
      <div className="opa">
        <a
          href="http://www.onepageawards.com/website/symodd/"
          target="_blank"
          rel="noreferrer"
        >
          SYMODD featured on OPA Awards
        </a>
      </div>
      <div id="awwwards" className="honorable white bottom right">
        <a
          href="http://www.awwwards.com/best-websites/symodd-creative-agency/"
          target="_blank"
          rel="noreferrer"
        >
          SYMODD Creative Agency
        </a>
      </div>
      <div
        id="wrapper"
        className="fullpage-wrapper fp-notransition"
        style={{
          top: "0px",
          display: "block",
          height: "100%",
          position: "relative",
          touchAction: "none",
        }}
      >
        <Home/>
        <Team />
        <Audiovisual />
        <Web />
        <Design />
        <Mobile />
        <Content />
        <BlogPage />
        <Contact />
      </div>
   
    </>
  );
}

export default App;
