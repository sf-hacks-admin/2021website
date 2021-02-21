import React from "react";
import annHiatt from "../assets/keynoteSpeakers/annHiatt.png";
import background from "../assets/keynoteSpeakers/speakerBackground.svg";

const KeynoteSpeakers = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <div  style={{ 
            margin: "120px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            justifyContent: "center",
            alignItems: "center"}}>

            <div id="mobileAboutCol" >
                <img src={annHiatt} className="aboutPicture" />
            </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            justifyContent: "center",
          }}
        >
          <div
            id="mobileAboutCol"
            className="reg-2"
            style={{
              width: 500,
              // marginBottom: 20,
              color: "#FFFFFF"
            }}
          >
            <div className="heading-3">ANN HIATT</div>
            <br />
            <div style={{fontWeight:"bold"}}>Professional Leadership Strategist</div>
            <br />
            Ann Hiatt was Chief of Staff at Google to CEO, Eric Schmidt, for 9 years,
             the Executive Business Partner to Marissa Mayer for 3 years,
              and executive assistant to Jeff Bezos (CEO of Amazon) for 3 years.
               In this talk, Ann shares how she got to work for some of the most powerful 
               people on the planet and how she is a sought Leadership Consultant with numerous CEO clients.
                If you want to stop being overlooked, maximize your impact, and create the career of your dreams you
                 won't want to miss this session!
          </div>

          {/* Welcome to SF Hacks 2021: Life Hacks! This is our first virtual
            hackathon and we can’t wait to produce a brand new experience for
            our hackers. The event will highlight the new ideologies we
            developed through this pandemic. We believe that in times of chaos,
            there is opportunity. Let’s develop programs, build applications,
            and find solutions to change our society for the better. */}
        </div>
        </div>

        <div  style={{ 
            margin: "120px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            justifyContent: "center",
            alignItems: "center"}}>

            <div id="mobileAboutCol" >
                <img src={annHiatt} className="aboutPicture" />
            </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "space-around",
            justifyContent: "center",
          }}
        >
          <div
            id="mobileAboutCol"
            className="reg-2"
            style={{
              width: 500,
              // marginBottom: 20,
              color: "#FFFFFF"
            }}
          >
            <div className="heading-3">ANN HIATT</div>
            <br />
            <div style={{fontWeight:"bold"}}>Professional Leadership Strategist</div>
            <br />
            Ann Hiatt was Chief of Staff at Google to CEO, Eric Schmidt, for 9 years,
             the Executive Business Partner to Marissa Mayer for 3 years,
              and executive assistant to Jeff Bezos (CEO of Amazon) for 3 years.
               In this talk, Ann shares how she got to work for some of the most powerful 
               people on the planet and how she is a sought Leadership Consultant with numerous CEO clients.
                If you want to stop being overlooked, maximize your impact, and create the career of your dreams you
                 won't want to miss this session!
          </div>

          {/* Welcome to SF Hacks 2021: Life Hacks! This is our first virtual
            hackathon and we can’t wait to produce a brand new experience for
            our hackers. The event will highlight the new ideologies we
            developed through this pandemic. We believe that in times of chaos,
            there is opportunity. Let’s develop programs, build applications,
            and find solutions to change our society for the better. */}
        </div>
        </div>
        </div>
    )
};

export default KeynoteSpeakers;