import React from "react";
import facebookIcon from '../assets/Facebook_Icon.svg';
import instagramIcon from '../assets/Instagram_Icon.svg';
import twitterIcon from '../assets/Twitter_Icon.svg';
import linkedinIcon from '../assets/LinkedIn_Icon.svg';
import discordIcon from '../assets/Discord_Icon.svg'

const Footer = () => {
  const socials = [
    {
      name:'facebook',
      icon:facebookIcon,
      link:'https://www.facebook.com/sfhacks/',
    },
    {
      name:'instagram',
      icon:instagramIcon,
      link:'https://www.instagram.com/sf.hacks/?hl=en',
    },
    {
      name:'twitter',
      icon:twitterIcon,
      link:'https://twitter.com/sf_hacks?lang=en',
    },
    {
      name:'linkedin',
      icon:linkedinIcon,
      link:'https://www.linkedin.com/company/sf-hacks-sfsu/',
    },
    {
      name:'discord',
      icon:discordIcon,
      link:'https://discord.gg/7RMDcNU',
    },
  ];

  return (
    <div style={{background:'black', padding:'30px 0'}}>
      <div style={{ display: 'flex', width:'350px', margin:'0 auto'}}>
        {socials.map( social => (
          <div key={social.name}>
            <a href={social.link}>
              <img src={social.icon} style={{width:'50px' , margin:'10px', borderRadius:'100%', background:'black'}}/>
            </a>
          </div>
        ))}
      </div>

      <div className="footer-main-container">
        <a href="mailto:sfhacksteam@gmail.com"><p className="footer-text"><u>sfhacksteam@gmail.com</u></p></a>
      </div>

      <div className="footer-main-container">
        {/* <span className="footer-text">Made with ♡ by SF Hacks</span> */}
        <span className="footer-text">Made with 💜 by SF Hacks</span>
      </div>
    </div>
  );
};

export default Footer;
