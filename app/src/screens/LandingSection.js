import React from "react";
import SFHACKs_logo from "../assets/SF_Hacks_Logo.png";
const LandingSection = () => {
  return (
    <div>
      <div
        style={{
          marginTop: -50,
          height: "100vh",
          minHeight: 500,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ marginRight: 50 }}>
          <img src={SFHACKs_logo} style={{ height: 450, width: "auto" }} />
        </div>
        <div className="home-h1">
          <div>EDUCATE.</div>
          <div>INNOVATE.</div>
          <div>COLLOBORATE.</div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
