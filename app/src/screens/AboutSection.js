import React from "react";

import AmanProfileImage from "../assets/teamProfile/Aman.png";
import BrendaProfileImage from "../assets/teamProfile/Brenda.png";
import JainamProfileImage from "../assets/teamProfile/Jainam.png";
import JohanaProfileImage from "../assets/teamProfile/Johana.png";
import JohnathanProfileImage from "../assets/teamProfile/Johnathan.png";
import KevinProfileImage from "../assets/teamProfile/Kevin.png";
import LeishaProfileImage from "../assets/teamProfile/Leisha.png";
import HimanshuProfileImage from "../assets/teamProfile/Himanshu.png";
// import MeghaProfileImage from "../assets/teamProfile/Megha.png";
import NyaProfileImage from "../assets/teamProfile/Nya.png";
import OrionProfileImage from "../assets/teamProfile/Orion.png";
import DenisProfileImage from "../assets/teamProfile/Denis.png";

import aboutPicture from "../assets/aboutSection/about-pic.png";
import aboutBackground from "../assets/aboutSection/about-bg.svg";
import teamPic from "../assets/aboutSection/about-team-pic.png";

import "../styles/AboutSection.css";

const AboutSection = () => {
  const profiles = [
    { name: "Leisha M.", position: "President", image: LeishaProfileImage },
    // {
    //   name: "Megha Babariya",
    //   position: "Vice President",
    //   image: MeghaProfileImage
    // },
    { name: "Kevin M.", position: "Treasurer", image: KevinProfileImage },
    {
      name: "Orion C.",
      position: "Logistics Lead",
      image: OrionProfileImage
    },
    {
      name: "Johnathan H.",
      position: "Day of Logistics",
      image: JohnathanProfileImage
    },
    {
      name: "Nya B.",
      position: "Sponshorship Lead",
      image: NyaProfileImage
    },
    {
      name: "Aman K.",
      position: "Design Lead",
      image: AmanProfileImage
    },
    {
      name: "Brenda Y.",
      position: "Designer/Developer",
      image: BrendaProfileImage
    },
    {
      name: "Jainam S.",
      position: "Web Developer",
      image: JainamProfileImage
    },
    {
      name: "Johana M.",
      position: "Marketing Lead",
      image: JohanaProfileImage
    },
    {
      name: "Himanshu G.",
      position: "Web Developer",
      image: HimanshuProfileImage
    },
    {
      name: "Denis M.",
      position: "Graphic Designer",
      image: DenisProfileImage
    }
  ];
  return (
    <div
      className="mainContainer-1 background-img-1 "
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div
        className="heading-1"
        style={{
          textAlign: "center",
          marginTop: "-60px"
        }}
      >
        <span>ABOUT</span>
      </div>
      <div style={{ marginTop: 50 }}>
        {/* <div className="headingText2">
          <span className="highlight">OUR MISSION</span>
        </div> */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            id="mobileAboutCol"
            className="reg-2"
            style={{
              width: 430,
              // marginBottom: 20,
              textAlign:"center",
            }}
          >
            Welcome to SF Hacks 2021: Life Hacks! This is our first virtual
            hackathon and we can’t wait to produce a brand new experience for
            our hackers. The event will highlight the new ideologies we
            developed through this pandemic. We believe that in times of chaos,
            there is opportunity. Let’s develop programs, build applications,
            and find solutions to change our society for the better.
          </div>
          <div id="mobileAboutCol" >
            <img src={aboutPicture} className="aboutPicture" />
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // justifyContent: "space-around",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <img
            src={teamPic}
            id="mobileAboutCol" 
            className="teamPic"
            //style={{ height: 275, width: "auto", marginTop: 20 }}
          />
        </div>
        <div
          id="mobileAboutCol" 
          className="reg-2"
          style={{
            width: 425,
            // marginBottom: 20,
            font: "normal normal normal Open Sans",
            textAlign:"center",
          }}
        >
          <div className="heading-3">OUR MISSION</div>
          <br />
          Our organization’s purpose is to plan and host California’s most
          talented collegiate hackers, designers, and developers, to a 24-hour
          hackathon. We work towards giving students an environment for maximum
          innovation, collaboration, and education.
        </div>
      </div>

      <div style={{ marginTop: 50 }}>
        <div
          className="heading-3"
          style={{
            // font: "italic normal bold 35px/45px Montserrat",
            textAlign: "center"
          }}
        >
          <span>OUR TEAM</span>
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
                    style={{ height: 120, width: 120, borderRadius: 70 }}
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
