import React from "react";

import AmanProfileImage from "../assets/teamProfile/Aman.png";
import BrendaProfileImage from "../assets/teamProfile/Brenda.png";
import JainamProfileImage from "../assets/teamProfile/Jainam.png";
import JohanaProfileImage from "../assets/teamProfile/Johana.png";
import JohnathanProfileImage from "../assets/teamProfile/Johnathan.png";
import KevinProfileImage from "../assets/teamProfile/Kevin.png";
import LeishaProfileImage from "../assets/teamProfile/Leisha.png";
// import MeghaProfileImage from "../assets/teamProfile/Megha.png";
import NyaProfileImage from "../assets/teamProfile/Nya.png";
import OrionProfileImage from "../assets/teamProfile/Orion.png";

import aboutPicture from "../assets/aboutSection/about-pic.png";

import "../styles/AboutSection.css";

const AboutSection = () => {
  const profiles = [
    { name: "Leisha Murthy", position: "President", image: LeishaProfileImage },
    // {
    //   name: "Megha Babariya",
    //   position: "Vice President",
    //   image: MeghaProfileImage
    // },
    { name: "Kevin Manago", position: "Treasurer", image: KevinProfileImage },
    {
      name: "Orion Culbertson",
      position: "Logistics Lead",
      image: OrionProfileImage
    },
    {
      name: "Johnathan Huynh",
      position: "Day of Logistics",
      image: JohnathanProfileImage
    },
    {
      name: "Nya Bautista",
      position: "Sponshorship Lead",
      image: NyaProfileImage
    },
    { 
      name: "Aman Kumar", 
      position: "Design Lead", 
      image: AmanProfileImage 
    },
    { 
      name: "Brenda Yau", 
      position: "Designer/Developer", 
      image: BrendaProfileImage 
    },
    {
      name: "Jainam Shah",
      position: "Web Developer",
      image: JainamProfileImage
    },
    {
      name: "Johana Matute",
      position: "Marketing Lead",
      image: JohanaProfileImage
    }
  ];
  return (
    <div style={{ paddingRight: "10%", paddingLeft: "10%", marginTop: 50 }}>
      <div className="headingText1" style={{ textAlign: "center" }}>
        <span className="highlight">About</span>
      </div>
      <div style={{ marginTop: 50 }}>
        <div className="headingText2">
          <span className="highlight">OUR MISSION</span>
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <div
            className="descriptionText"
            style={{ width: 380, marginBottom: 20 }}
          >
            Welcome to SF Hacks 2021: Life Hacks! This is our first virtual hackathon and we can’t wait to produce a brand new experience for our hackers. The event will highlight the new ideologies we developed through this pandemic. We believe that in times of chaos, there is opportunity. Let’s develop programs, build applications, and find solutions to change our society for the better.
          </div>
          <div>
            <img src={aboutPicture} style={{ height: 250, width: "auto" }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 50 }}>
        <div className="headingText2">
          <span className="highlight">OUR TEAM</span>
        </div>
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {profiles.map(profile => (
              <div key={profile.name} style={{ marginBottom: 20, margin: 20 }}>
                <div>
                  <img
                    src={profile.image}
                    style={{ height: 140, width: 140, borderRadius: 70 }}
                  />
                </div>
                <div className="profileName" style={{ marginTop: 6 }}>
                  {profile.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
