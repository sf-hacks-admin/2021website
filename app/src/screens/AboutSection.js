import React from "react";

import AmanProfileImage from "../assets/teamProfile/Aman.png";
import JainamProfileImage from "../assets/teamProfile/Jainam.png";
import JohanaProfileImage from "../assets/teamProfile/Johana.png";
import JohnathanProfileImage from "../assets/teamProfile/Johnathan.png";
import KevinProfileImage from "../assets/teamProfile/Kevin.png";
import LeishaProfileImage from "../assets/teamProfile/Leisha.png";
import MeghaProfileImage from "../assets/teamProfile/Megha.png";
import NyaProfileImage from "../assets/teamProfile/Nya.png";
import OrionProfileImage from "../assets/teamProfile/Orion.png";

const AboutSection = () => {
  const profiles = [
    { name: "Leisha Murthy", position: "President", image: LeishaProfileImage },
    {
      name: "Megha Babariya",
      position: "Vice President",
      image: MeghaProfileImage
    },
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
    { name: "Aman Kunar", position: "Design Lead", image: AmanProfileImage },
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
    <div>
      <div>ABOUT US:</div>
      <div
        style={{
          paddingRight: 100,
          paddingLeft: 100,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center"
        }}
      >
        {profiles.map(profile => {
          return (
            <div
              style={{
                flex: "0 0 30%",
                padding: 15,
                width: 270
              }}
            >
              <div style={{ width: 270, backgroundColor: "#512783" }}>
                <img src={profile.image} style={{ width: 270, height: 254 }} />
                <div style={{ padding: 10, paddingLeft: 15 }}>
                  <div className="about-profile-name">{profile.name}</div>
                  <div className="about-profile-pos">{profile.position}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
