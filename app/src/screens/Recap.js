import React from "react";
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
    return(
        <div
        className="div-shadow"
        style={{
          width: props.width === "xs" ? 250 : 400,
          height: props.width === "xs" ? undefined : 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          backgroundColor: "#ffffff",
          padding: "30px 50px",
          margin: "20px",
          borderRadius: 20
        }}>
            <img src={props.imgSrc} className="tracks-card-img" />
            <div className="heading-3" style={{ marginTop: 20, marginBottom: 20 }}>
                {props.projectName}
            </div>
            <div className="reg-2" style={{ textAlign: "center" }}>
                {props.position}
            </div>
            <div className="heading-3" style={{ marginTop: 20, marginBottom: 20 }}>
                {props.teamName}
            </div>
            <div className="reg-2" style={{ textAlign: "center" }}>
                {props.description}
            </div>
        </div>
    )
}

const Recap = () => {
    return (
        <div className="container-1 background-img-1 "
        style={{ backgroundImage: `url(${backgroundImg})`, marginBottom: "230px"}}>

            <div className="heading-1" style={{textAlign:"center"}}>2021 RECAP</div>
            <img src={numParticipants} className="numParticipants"/>
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px"
            }}
          >
            <img src={countries} className="countries"/>
            <img src={presenters} className="presenters"/>
          </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                
                    <WinnerCard imgSrc={secondPlace} position={"2ND PLACE"} teamName={"QNA SPACE"} description={"A platform to help connect professors with students to help them understand the delivery of their content."}/>
                    <WinnerCard style={{paddingBottom:"30px"}} imgSrc={firstPlace} position={"1ST PLACE"} teamName={"CHECKUP"} description={"An app that allows users to regularly check up on their physical and mental well-being without needing to visit a doctor."}/>
                    <WinnerCard imgSrc={thirdPlace} position={"3RD PLACE"} teamName={"HEALTHY HABITS"} description={"Healthy Habits counts the number of repetitions you do in each workout using machine learning."}/>
            </div>
            <div style={{display:"flex", textAlign:"center"}}>
                    <WinnerCard imgSrc={mobileHack} position={"BEST MOBILE HACK"} teamName={"TEAM BEAM"} description={"An app that helps you build and maintain meaningful relationships with your friends, family, and colleagues."}/>
                    <WinnerCard imgSrc={beginnerHack} position={"BEST BEGINNING HACK"} teamName={"THE DREAM TEAM"} description={"An app that removes barriers to learning such as accessibility, affordability, and lack of engagement."}/>
                
            </div>
        </div>
    )
}

export default Recap;