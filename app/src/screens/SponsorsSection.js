import React from "react";

import Microsoft from "../assets/sponsors/msft.png";
import Google from "../assets/sponsors/google.png";
import Autodesk from "../assets/sponsors/autodesk.png";
import WeightWatchers from "../assets/sponsors/weight-watchers.png";
import Lyft from "../assets/sponsors/lyft.png";
import Twilio from "../assets/sponsors/twilio.png";
// import InterviewCake from "../assets/sponsors/interview-cake.png";
import COSE from "../assets/sponsors/cose.png";
import COB from "../assets/sponsors/cob.png";
// import Notivize from "../assets/sponsors/notivize.png";
// import Pathrise from "../assets/sponsors/pathrise.png";
// import Desmos from "../assets/sponsors/desmos.png";
import Walmart from "../assets/sponsors/walmart.png";
// import Allbirds from "../assets/sponsors/allbirds.png";
import StickerMule from "../assets/sponsors/sticker-mule.png";
// import GogoSqueez from "../assets/sponsors/gogo-squeez.png";
// import Bare from "../assets/sponsors/bare.png";
import Macys from "../assets/sponsors/macys.png";
// import Bobos from "../assets/sponsors/bobos.png";
import Guru from "../assets/sponsors/guru.png";
// import YerbaMate from "../assets/sponsors/guayaki-yerba-mate.png";

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Microsoft",
      logo: Microsoft,
      link: "https://www.microsoft.com/en-us/",
    },
    {
      name: "Google",
      logo: Google,
      link: "https://www.google.com/?client=safari",
    },
    {
      name: "Autodesk",
      logo: Autodesk,
      link: "https://www.autodesk.com",
    },
    {
      name: "Weight Watchers",
      logo: WeightWatchers,
      link: "https://www.weightwatchers.com/us/",
    },
    {
      name: "Lyft",
      logo: Lyft,
      link: "https://www.lyft.com",
    },
    {
      name: "Twilio",
      logo: Twilio,
      link: "https://www.twilio.com",
    },
    // {
    //   name: "Interview Cake",
    //   logo: InterviewCake,
    // },
    {
      name: "SFSU College of Science and Engineering",
      logo: COSE,
      link: "https://cose.sfsu.edu",
    },
    {
      name: "SFSU Lam Family College of Business",
      logo: COB,
      link: "https://cob.sfsu.edu",
    },
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
    {
      name: "Walmart",
      logo: Walmart,
      link: "https://www.walmart.com",
    },
    // {
    //   name: "Allbirds",
    //   logo: Allbirds,
    // },
    {
      name: "StickerMule",
      logo: StickerMule,
      link: "https://www.stickermule.com",
    },
    // {
    //   name: "Gogo Squeez",
    //   logo: GogoSqueez,
    // },
    // {
    //   name: "Bare",
    //   logo: Bare,
    // },
    {
      name: "Macys",
      logo: Macys,
      link: "https://www.macys.com",
    },
    // {
    //   name: "Bobos",
    //   logo: Bobos,
    // },
    {
      name: "Guru Organic Energy",
      logo: Guru,
      link: "https://www.guruenergy.com/en-us",
    },
    // {
    //   name: "Guayaki Yerba Mate",
    //   logo: YerbaMate,
    // },
  ];

  return (
    <div style={{ margin: "60px 0" }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <span style={{ textAlign: "left",   font: "normal normal bold 45px/74px \"Montserrat\"", letterSpacing: '0', color: '#000', opacity: 1, backgroundColor:"#d7b5ff", margin:'0', padding:'0', lineHeight:'45px' }}>Past Sponsors</span>
        </div>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', paddingTop: '20px' }}>
          <div style={{ maxWidth: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {sponsors.map(sponsor => (
              <div key={sponsor.name} style={{padding:'20px'}}>
                <div>
                  <a href={sponsor.link}>
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      style={{ height: 120, width: "auto", }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default SponsorsSection;