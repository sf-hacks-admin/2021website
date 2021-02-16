import React from "react";
import "../styles/SponsorsSection.css";
import backgroundImg from "../assets/sponsors/backgroundImg.png";

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
import csld from "../assets/sponsors/csld-logo.png";
import Hyperx from "../assets/sponsors/hyperx.png";
import Chipotle from "../assets/sponsors/chipotle.png";
// import InterviewCake from "../assets/sponsors/interview-cake.png";
import Lyft from "../assets/sponsors/lyft.png";
import GCloud from "../assets/sponsors/google-cloud.png";
import Macys from "../assets/sponsors/macys.png";
import Microsoft from "../assets/sponsors/msft.png";
// import Notivize from "../assets/sponsors/notivize.png";
// import Pathrise from "../assets/sponsors/pathrise.png";
import StickerMule from "../assets/sponsors/sticker-mule.png";
import Twilio from "../assets/sponsors/twilio.png";
import IBM from "../assets/sponsors/ibm.png";
import Walmart from "../assets/sponsors/walmart.png";
import Wolfram from "../assets/sponsors/wolf.png";
import WeightWatchers from "../assets/sponsors/weight-watchers.png";
import { Button } from "@material-ui/core";
// import YerbaMate from "../assets/sponsors/guayaki-yerba-mate.png";

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Microsoft",
      logo: Microsoft,
      link: "https://www.microsoft.com/en-us/"
    },
    {
      name: "IBM",
      logo: IBM,
      link: "https://www.ibm.com/us-en/"
    },
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
    },
    {
      name: "Hyper X",
      logo: Hyperx,
      link: "https://www.hyperxgaming.com/unitedstates/us"
    },
    {
      name: "Chipotle",
      logo: Chipotle,
      link: "https://www.chipotle.com/"
    },
    {
      name: "CSLD",
      logo: csld,
      link: "https://careerservices.sfsu.edu/"
    },
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
    {
      name: "StickerMule",
      logo: StickerMule,
      link: "http://hackp.ac/mlh-stickermule-hackathons"
    },
    {
      name: "Wolfram Alpha",
      logo: Wolfram,
      link: "https://www.wolframalpha.com/"
    }
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
          <span className="heading-2" style={{color:"white", marginTop:"-60px"}}>SPONSORS</span>
        </div>
        <div
          className="sponsor-style div-shadow"
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
                    <a href={sponsor.link} target="_blank">
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
            <a href="https://sfhacks2021.typeform.com/to/qqAT73M7" target="_blank">
              <Button variant="contained" className="landing-button-font-1">
                Become a Sponsor
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
