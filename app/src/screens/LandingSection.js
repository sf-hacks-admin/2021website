import React, { useState, useEffect } from "react";
import SFHACKs_logo from "../assets/SF_Hacks_Logo.png";
import backgrounfImg from "../assets/landingSection/background.png";
import SFHacksLogo from "../assets/landingSection/crop-landinglogo.png";
import bottomMobile from "../assets/landingSection/bottomMobile.svg";
import topMobile from "../assets/landingSection/topMobile.svg";

import { Button } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

import "../styles/LandingSection.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const LandingSection = props => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div
    //   style={{
    //     minHeight: "100vh",
    //     marginTop: -50,
    //     marginBottom: 100,
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center"
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       alignContent: "center",
    //       flexWrap: "wrap"
    //     }}
    //   >
    //     <div>
    //       <img src={SFHACKs_logo} className="landingSec-image" />
    //     </div>
    //     <div className="landingSec-h1">
    //       <div>EDUCATE.</div>
    //       <div>INNOVATE.</div>
    //       <div>COLLABORATE.</div>
    //     </div>
    //   </div>
    //   {/* <div style={{ position: "absolute", bottom: 10 }}>buttton</div> */}
    // </div>
    <div className="landing-parent-container">
      {windowDimensions.width <= 690 ? (
        <div
          style={{
            width: "100%",
            height: "105px",
            backgroundImage: `url(${topMobile})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center"
          }}
        ></div>
      ) : null}

      <img src={SFHacksLogo} className="landing-img-logo " />

      <div className="landing-font-1" style={{ marginBottom: 20 }}>
        San Francisco's
        {props.width === "xs" || props.width === "sm" ? <br /> : " "}largest
        collegiate hackathon.
      </div>
      <div className="landing-font-2">
        Check out our winners below!
        {props.width === "xs" || props.width === "sm" ? <br /> : " "}
      </div>
      <a href="https://sfhacks2021.typeform.com/to/jGdkmdK8" target="_blank">
        <Button variant="contained" className="landing-button-font-1">
          SUBSCRIBE TO NEWSLETTER
        </Button>
      </a>
      {/* <div className="landing-font-3">
        <a href="https://sfhacks2020.typeform.com/to/O8sT9jVk" target="_blank">
          Become a mentor
        </a>
      </div> */}
      {windowDimensions.width <= 690 ? (
        <div
          style={{
            width: "100%",
            height: "105px",
            backgroundImage: `url(${bottomMobile})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center"
          }}
        ></div>
      ) : null}
    </div>
  );
};

export default withWidth()(LandingSection);
