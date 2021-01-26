import React from "react";
import "../styles/SponsorsSection.css";
import backgroundImg from "../assets/sponsors/backgroundImg.svg";
// import Allbirds from "../assets/sponsors/allbirds.png";
import Autodesk from "../assets/sponsors/autodesk.png";
// import Bare from "../assets/sponsors/bare.png";
// import Bobos from "../assets/sponsors/bobos.png";
import COSE from "../assets/sponsors/cose.png";
import COB from "../assets/sponsors/cob.png"; // import Desmos from "../assets/sponsors/desmos.png";
// import GogoSqueez from "../assets/sponsors/gogo-squeez.png";
import Google from "../assets/sponsors/google.png";
import Guru from "../assets/sponsors/guru.png";
import Cahsi from "../assets/sponsors/cahsi.png";
// import InterviewCake from "../assets/sponsors/interview-cake.png";
import Lyft from "../assets/sponsors/lyft.png";
import GCloud from "../assets/sponsors/google-cloud.png";
import Macys from "../assets/sponsors/macys.png";
import Microsoft from "../assets/sponsors/msft.png";
// import Notivize from "../assets/sponsors/notivize.png";
// import Pathrise from "../assets/sponsors/pathrise.png";
import StickerMule from "../assets/sponsors/sticker-mule.png";
import Twilio from "../assets/sponsors/twilio.png";
import Walmart from "../assets/sponsors/walmart.png";
import WeightWatchers from "../assets/sponsors/weight-watchers.png";
import { Button } from "@material-ui/core";
// import YerbaMate from "../assets/sponsors/guayaki-yerba-mate.png";

const SponsorsSection = () => {
  const sponsors = [
    // {
    //   name: "Microsoft",
    //   logo: Microsoft,
    //   link: "https://www.microsoft.com/en-us/"
    // },
    {
      name: "SFSU College of Science and Engineering",
      logo: COSE,
      link: "https://cose.sfsu.edu"
    },
    {
      name: "Google Cloud",
      logo: GCloud,
      link: "https://cloud.google.com/"
    },
    {
      name: "CAHSI",
      logo: Cahsi,
      link: "https://cahsi.utep.edu/"
    }
    // {
    //   name: "Google",
    //   logo: Google,
    //   link: "https://www.google.com/?client=safari"
    // },
    // {
    //   name: "Autodesk",
    //   logo: Autodesk,
    //   link: "https://www.autodesk.com"
    // },
    // {
    //   name: "Weight Watchers",
    //   logo: WeightWatchers,
    //   link: "https://www.weightwatchers.com/us/"
    // },
    // {
    //   name: "Lyft",
    //   logo: Lyft,
    //   link: "https://www.lyft.com"
    // },
    // {
    //   name: "Twilio",
    //   logo: Twilio,
    //   link: "https://www.twilio.com"
    // },
    // {
    //   name: "Interview Cake",
    //   logo: InterviewCake,
    // },

    // {
    //   name: "SFSU Lam Family College of Business",
    //   logo: COB,
    //   link: "https://cob.sfsu.edu"
    // },
    // {
    //   name: "Notivize",
    //   logo: Notivize,
    // },
    // {
    //   name: "Pathrise",
    //   logo: Pathrise,
    // },
    // {
    //   name: "Desmos",
    //   logo: Desmos,
    // },
    // {
    //   name: "Walmart",
    //   logo: Walmart,
    //   link: "https://www.walmart.com"
    // },
    // {
    //   name: "Allbirds",
    //   logo: Allbirds,
    // },
    // {
    //   name: "StickerMule",
    //   logo: StickerMule,
    //   link: "https://www.stickermule.com"
    // },
    // {
    //   name: "Gogo Squeez",
    //   logo: GogoSqueez,
    // },
    // {
    //   name: "Bare",
    //   logo: Bare,
    // },
    // {
    //   name: "Macys",
    //   logo: Macys,
    //   link: "https://www.macys.com"
    // },
    // {
    //   name: "Bobos",
    //   logo: Bobos,
    // },
    // {
    //   name: "Guru Organic Energy",
    //   logo: Guru,
    //   link: "https://www.guruenergy.com/en-us"
    // }
    // {
    //   name: "Guayaki Yerba Mate",
    //   logo: YerbaMate,
    // },
  ];

  return (
    <div
      className="mainContainer-1 background-img-1 "
      id="ourSponsors"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div>
        <div className="title" style={{ paddingBottom: "20px" }}>
          <span className="headingText1">Sponsors</span>
        </div>
        <div
          className="sponsor-style"
          style={{
            // background: "white",
            // // marginLeft: "100px",
            // // marginRight: "100px",
            // padding: "20px",
            // height:"700px",
            // width:"auto"
          }}
        >
          <div className="sponsor-content-container">
            <div className="sponsor-content-inner">
              {sponsors.map(sponsor => (
                <div key={sponsor.name} className="sponsor-padding">
                  <div>
                    <a href={sponsor.link}>
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="img-style"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
          <Button variant="contained" className="landing-button-font-1">
        Become a Sponsor
      </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
