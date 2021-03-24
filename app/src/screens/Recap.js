import React, { useState, useLayoutEffect, useEffect } from "react";
import beginnerHack from "../assets/recap/beginnerHack.png";
import countries from "../assets/recap/countries.png";
import presenters from "../assets/recap/presenters.png";
import mobileHack from "../assets/recap/mobileHack.png";
import firstPlace from "../assets/recap/firstPlace.png";
import secondPlace from "../assets/recap/secondPlace.png";
import thirdPlace from "../assets/recap/thirdPlace.png";
import numParticipants from "../assets/recap/numParticipants.png";
import backgroundImg from "../assets/tracksSection/backgroundImg.svg";
import "../styles/recap.css";

const WinnerCard = props => {
  return (
    <div
      className="div-shadow"
      style={{
        width: props.width === "xs" ? 250 : 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ffffff",
        margin: "20px",
        borderRadius: 20
      }}
    >
      <div
        className="recap-card-img"
        style={{
          backgroundImage: `url(${props.imgSrc})`,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}
      ></div>
      <div
        style={{
          height: props.width === "xs" ? undefined : 300,
          width: 400
        }}
      >
        <div
          style={{
            padding: "30px 50px",
            textAlign: "center"
          }}
        >
          <div className="recap-card-teamName">{props.teamName}</div>
          <div className="recap-card-teamPlace">{props.position}</div>
          <div style={{ marginBottom: 20 }} />
          <div className="recap-card-projectName">{props.projectName}</div>
          <div
            className="recap-card-projectDesc"
            style={{ textAlign: "center" }}
          >
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Recap = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const winner2 = {
    teamName: "TEAM BREADREN",
    imgSrc: secondPlace,
    position: "2ND PLACE",
    projectName: "QNA SPACE",
    description:
      "A platform to help connect professors with students to help them understand the delivery of their content."
  };
  const winner1 = {
    teamName: "TEAM SNU",
    imgSrc: secondPlace,
    position: "1ST PLACE",
    projectName: "CHECKUP",
    description:
      "An app that allows users to regularly check up on their physical and mental well-being without needing to visit a doctor."
  };
  const winner3 = {
    teamName: "TEAM TREE",
    imgSrc: secondPlace,
    position: "3RD PLACE",
    projectName: "HEALTHY HABITS",
    description:
      "Healthy Habits counts the number of repetitions you do in each workout using machine learning."
  };

  const [position1, setPosition1] = useState(winner2);
  const [position2, setPosition2] = useState(winner1);
  const [position3, setPosition3] = useState(winner3);

  useEffect(() => {
    if (size[0] < 1420) {
      setPosition1(winner1);
      setPosition2(winner2);
    } else {
      setPosition1(winner2);
      setPosition2(winner1);
    }
  }, [size]);

  return (
    <div className="parentContainer-1">
      <div
        className="mainContainer-1 background-img-1 "
        style={{
          backgroundImage: `url(${backgroundImg})`
        }}
      >
        <div className="heading-1" style={{ textAlign: "center" }}>
          2021 RECAP
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img src={numParticipants} className="recap_numParticipants" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={countries} className="recap_countries" />
          <img src={presenters} className="recap_presenters" />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className="winner2-outterdiv">
            <WinnerCard {...position1} />
          </div>
          <div className="winner1-outterdiv">
            <WinnerCard {...position2} />
          </div>
          <div className="winner3-outterdiv">
            <WinnerCard {...position3} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <WinnerCard
            teamName={"TEAM BEAM"}
            imgSrc={secondPlace}
            position={"BEST MOBILE HACK"}
            projectName={"BEAM"}
            description={
              "An app that helps you build and maintain meaningful relationships with your friends, family, and colleagues."
            }
          />
          <WinnerCard
            teamName={"THE DREAM TEAM"}
            imgSrc={secondPlace}
            position={"BEST BEGINNING HACK"}
            projectName={"VIBE"}
            description={
              "An app that removes barriers to learning such as accessibility, affordability, and lack of engagement."
            }
          />
        </div>
        <div className="reg-1" style={{ textAlign: "center", marginTop: 40 }}>
          CLICK HERE TO VIEW ALL PROJECTS!
        </div>
      </div>
    </div>
  );
};

export default Recap;
