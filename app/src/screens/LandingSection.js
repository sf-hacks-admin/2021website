import React from "react";
import SFHACKs_logo from "../assets/SF_Hacks_Logo.png";
import backgrounfImg from "../assets/landingSection/background.png";
import SFHacksLogo from "../assets/landingSection/SFHacksLogo.png";
import { Button } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

import "../styles/LandingSection.css";

const LandingSection = props => {
  console.log(props);
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
      <img src={SFHacksLogo} className="landing-img-logo " />

      <div className="landing-font-1" style={{ marginBottom: 20 }}>
        San Francisco's
        {props.width === "xs" || props.width === "sm" ? <br /> : " "}largest
        collegiate hackathon.
      </div>
      <div className="landing-font-2">
        March 5-7, 2021
        {props.width === "xs" || props.width === "sm" ? <br /> : " "}// fully
        virtual
      </div>

      <Button variant="contained" className="landing-button-font-1">
        APPLY NOW
      </Button>
      <div className="landing-font-3">
        <a href="#">Become a mentor</a>
      </div>
    </div>
  );
};

export default withWidth()(LandingSection);
