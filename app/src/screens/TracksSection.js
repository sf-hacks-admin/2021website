import React from "react";

import "../styles/TracksSection.css";

import homeImg from "../assets/tracksSection/undraw_sweet_home_dkhr.svg";
import healthImg from "../assets/tracksSection/undraw_biking_kc4f.svg";
import communicationImg from "../assets/tracksSection/undraw_Chatting_re_j55r.svg";
import educationImg from "../assets/tracksSection/undraw_education_f8ru.svg";

import backgroundImg from "../assets/tracksSection/backgroundImg.svg";

import Grid from "@material-ui/core/Grid";
import withWidth from "@material-ui/core/withWidth";

const TrackCard = props => {
  return (
    <Grid
      item
      sm={12}
      md={6}
      container
      alignItems="center"
      style={{
        justifyContent:
          props.width === "sm" || props.width === "xs"
            ? "center"
            : props.index % 2 === 0
            ? "flex-end"
            : "flex-start"
      }}
    >
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
          borderRadius: 20
        }}
      >
        <img src={props.imgSrc} className="tracks-card-img" />
        <div className="heading-3" style={{ marginTop: 20, marginBottom: 20 }}>
          {props.title}
        </div>
        <div className="reg-2" style={{ textAlign: "center" }}>
          {props.description}
        </div>
      </div>
    </Grid>
  );
};

const TracksSection = props => {
  const tracks = [
    {
      imgSrc: educationImg,
      title: "EDUCATION",
      description:
        "Due to the pandemic, many of us around the globe are struggling to adapt to this environment. This goes for students, teachers, and employees in the workforce. We challenge our hackers to rethink their own experiences in school and explore ways to better society’s approach to Education."
    },
    {
      imgSrc: communicationImg,
      title: "COMMUNICATION",
      description:
        "We are currently limited to the amount of connectivity we have with our loved ones. From families across the world to friends across a state, we are constricted to communication via technology. This track is intended to motivate hackers to find hacks to help rebuild the bridge to Communication."
    },
    {
      imgSrc: healthImg,
      title: "HEALTH",
      description:
        "From recent events, our health is more crucial than ever. We should maintain our physical and mental health in these abnormal times. With more than half the nation lacking in healthcare, the strive for solutions is more prevalent than ever. This challenge is aimed towards hackers who want to explore Health Hacks."
    },
    {
      imgSrc: homeImg,
      title: "HOME",
      description:
        "The world has been at a stand still as most people have shifted their lives to staying home. We have utilized tips/tricks to learn, work, teach, and entertain from the comfort of our household. For this track, we challenge our hackers to reflect on their own new found skill set and produce applications to improve one’s life from Home."
    }
  ];
  return (
    <div className="parentContainer-1">
      <div
        className="mainContainer-1 background-img-1 "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="heading-1" style={{ textAlign: "center", paddingTop:"100px" }}>
          Welcome to SF Hacks 2021: Life Hacks
        </div>
        <div className="welcomeHackers">
          This is our first virtual hackathon and we can’t wait to produce a
          brand new experience for our hackers. The event will highlight the new
          ideologies we developed through this pandemic. We believe that in
          times of chaos, there is opportunity. Let’s develop programs, build
          applications, and find solutions to change our society for the better.
        </div>
        <br />
        <div className="heading-1" style={{ textAlign: "center" }}>
          TRACKS
        </div>
        <Grid container spacing={5}>
          {tracks.map((track, index) => (
            <TrackCard {...track} index={index} {...props} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default withWidth()(TracksSection);
