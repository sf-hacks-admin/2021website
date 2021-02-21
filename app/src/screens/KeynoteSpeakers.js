import React from "react";
import AnnHiatt from "../assets/keynoteSpeakers/annHiatt.png";
import LynnMahoney from "../assets/keynoteSpeakers/lynnMahoney.png";
import background from "../assets/keynoteSpeakers/speakerBackground.svg";
import "../styles/KeynoteSection.css";

const KeynoteSpeakers = () => {
  const keynoteSpeakers = [
    {
      name: "ANN HIATT",
      title: "Professional Leadership Strategist",
      description:
        "Ann Hiatt was Chief of Staff at Google to CEO, Eric Schmidt, for 9 years, the Executive Business Partner to Marissa Mayer for 3 years, and executive assistant to Jeff Bezos (CEO of Amazon) for 3 years. In this talk, Ann shares how she got to work for some of the most powerful people on the planet and how she is a sought Leadership Consultant with numerous CEO clients. If you want to stop being overlooked, maximize your impact, and create the career of your dreams you won't want to miss this session!",
      imgSrc: AnnHiatt
    },
    {
      name: "LYNN MAHONEY",
      title: "President of San Francisco State University",
      description:
        "Lynn Mahoney is the first woman appointed to serve as the President of San Francisco State University. After graduating from Stanford/Rutgers University, she embarked on a memorable career and is now one of the most influential women in San Francisco. If you want to learn how to succeed as a woman in the corporate world, you don’t want to miss her speech.",
      imgSrc: LynnMahoney
    }
  ];
  return (
    <div className="parentContainer-1">
      <div
        className="mainContainer-1 background-img-1"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="heading-1"
          style={{ textAlign: "center", color: "#ffffff" }}
        >
          KEYNOTE SPEAKERS
        </div>

        {keynoteSpeakers.map(keynoteSpeaker => (
          <div
            style={{
              marginTop: "80px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              alignContent: "center"
            }}
          >
            <div style={{}}>
              <img
                src={keynoteSpeaker.imgSrc}
                className="keynoteSpeakerPicture"
              />
            </div>
            <div className="reg-2 keynoteSpeakerText" style={{}}>
              <div className="heading-3">{keynoteSpeaker.name}</div>
              <br />
              <div style={{ fontWeight: "bold" }}>{keynoteSpeaker.title}</div>
              <br />
              <div>{keynoteSpeaker.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
