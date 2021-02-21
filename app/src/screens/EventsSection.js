import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/EventsSection.css";
import backgroundImg from "../assets/eventSection/backgroundImg.svg";

const EventsSection = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    { title: "Github Workshop", date: "Oct 6th, 2020", time: "" },
    { title: "Web Application Dev", date: "Oct 20th, 2020", time: "" },
    { title: "Mobile Application Dev", date: "Nov 6th, 2020", time: "" },
    {
      title: "IOT(Introduction to Internet of Things)",
      date: "Nov 19th, 2020",
      time: ""
    },
    { title: "AR/VR OR AI/Machine Learning", date: "Dec 2nd, 2020", time: "" }
  ];

  var settings = {
    infinite: true,

    className: "center",

    centerMode: true,
    // centerPadding: "100px",

    initialSlide: 0,

    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: (current, next) => {
      setCurrentEvent(next);
    },
    afterChange: current => {},

    speed: 800, // more-> slower
    adaptiveHeight: true
  };
  return (
    <div className="parentContainer-1">
      <div
        className=" mainContainer-1 background-img-1"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          paddingBottom: 50,
          paddingTop: 150
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 50, color: "white" }}>
          <span className="heading-2">PAST EVENTS</span>
        </div>
        <div className="innerContainer">
          <Slider {...settings}>
            {events.map((event, i) => (
              <div key={event.title}>
                <div
                  style={{
                    height: 350,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    className="eventCard"
                    style={{
                      height: currentEvent === i ? 250 : 150,
                      opacity: currentEvent === i ? "1.0" : "0.2"
                    }}
                  >
                    {/* <img
                      src={require("../assets/cardimage.png")}
                      style={{ width: "80%", height: "auto" }}
                    /> */}
                    <div className="eventTitle">{event.title}</div>
                    <div className="eventDate">{event.date}</div>
                    <div>{event.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
