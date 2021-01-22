import React from "react";
import SFHACKs_logo from "../assets/SF_Hacks_Logo.png";
import backgrounfImg from "../assets/landingSection/background.png";
import SFHacksLogo from "../assets/landingSection/SFHacksLogo.png";
import { Button } from "@material-ui/core";

import "../styles/LandingSection.css";

const LandingSection = () => {
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
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
        marginBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgrounfImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <img
        src={SFHacksLogo}
        style={{ marginBottom: 20, height: 340, width: "auto" }}
      />
      <div className="landing-font-1" style={{ marginBottom: 20 }}>
        San Francisco's largest collegiate hackathon.
      </div>
      <div
        className="landing-font-2"
        style={{
          marginBottom: 20,
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "#F5EDFF",
          borderRadius: 25
        }}
      >
        March 5-7, 2021 // fully virtual
      </div>

      <Button
        variant="contained"
        className="button-font-1"
        style={{
          marginBottom: 20,
          padding: "15px 60px",
          backgroundColor: "#6b3ab9",
          borderRadius: 40
        }}
      >
        APPLY NOW
      </Button>
      <div className="landing-font-3">
        <a href="#">Become a mentor</a>
      </div>
    </div>
  );
};

export default LandingSection;
