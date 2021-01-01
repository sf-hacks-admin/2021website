import React from "react";
import SFHACKs_logo from "../assets/SF_Hacks_Logo.png";
const LandingSection = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        marginTop: -50,
        marginBottom: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap"
        }}
      >
        <div>
          <img src={SFHACKs_logo} className="landingSec-image" />
        </div>
        <div className="landingSec-h1">
          <div>EDUCATE.</div>
          <div>INNOVATE.</div>
          <div>COLLABORATE.</div>
        </div>
      </div>
      {/* <div style={{ position: "absolute", bottom: 10 }}>buttton</div> */}
    </div>
  );
};

export default LandingSection;
