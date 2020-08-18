import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Background from "../../assets/Background.svg";
import { ReactComponent as Instagram_Icon } from "../../assets/Instagram_Icon.svg";
import { ReactComponent as Facebook_Icon } from "../../assets/Facebook_Icon.svg";
import { ReactComponent as Twitter_Icon } from "../../assets/Twitter_Icon.svg";

import Link from "@material-ui/core/Link";
import { SvgIcon, Icon, IconButton } from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function replaceAt(str, index, replacement) {
  return (
    str.substr(0, index) + replacement + str.substr(index + replacement.length)
  );
}

const glitchTextOpt = [
  "SAN FRANCISCO STATE UNIVERSITY",
  "ALL HACKERS WELCOME",
  "COMING SOON"
];
class LandingPage extends Component {
  state = {
    glitchTextIndex: 0,
    glitchText: glitchTextOpt[0]
  };

  componentDidMount() {
    const glitchTextChange = async () => {
      var oldtext = glitchTextOpt[this.state.glitchTextIndex];

      var newtext;
      if (this.state.glitchTextIndex === 2) {
        newtext = glitchTextOpt[0];
      } else {
        newtext = glitchTextOpt[this.state.glitchTextIndex + 1];
      }

      const glitch = async index => {
        console.log("glitch started");
        const randText = "!<>-_\\/[]{}—=+*^?#_()__";
        var randItteration = getRandom(25, 35);
        var replacementChar = "^";
        let i = 0;
        while (i < randItteration) {
          replacementChar = randText[getRandom(0, randText.length - 1)];
          this.setState({
            glitchText: replaceAt(this.state.glitchText, index, replacementChar)
          });

          //   await new Promise(resolve => setTimeout(resolve, 1000));
        }
        console.log("glitch ended");
      };

      for (let i = 0; i < oldtext.length; i++) {
        glitch(i);

        // if (i >= newtext.length) {
        //   //   glitch and replace that with ""
        //   //
        //   oldtext = replaceAt(oldtext, i, " ");
        //   this.setState({
        //     glitchText: oldtext
        //   });
        // } else {
        //   // glitch and replace oldtext[i] = newtext[i];
        //   //
        //   oldtext = replaceAt(oldtext, i, newtext[i]);
        //   this.setState({
        //     glitchText: oldtext
        //   });
        // }
        console.log("text changed");
      }

      this.setState({
        glitchTextIndex: this.state.glitchTextIndex + 1
      });
    };

    this.glitchTimeout = setInterval(() => {
      //   if (this.state.glitchTextIndex === 2) {
      //     this.setState({ glitchTextIndex: 0 });
      //   } else {
      //     this.setState({ glitchTextIndex: this.state.glitchTextIndex + 1 });
      //   }
      glitchTextChange();
    }, 5000);
  }

  componentDidUnmount() {
    clearInterval(this.glitchTimeout);
  }

  //   componentDidUpdate(prevProps, prevState, snapshot) {
  //     if (this.state.glitchTextIndex !== prevState.glitchTextIndex) {
  //       this.setState({
  //         glitchText: glitchTextOpt[this.state.glitchTextIndex]
  //       });
  //     }
  //   }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <div
          id="lp-main-container"
          style={{
            backgroundImage: `url(${Background}) `
            //   height: "80vh",
          }}
        >
          <div>
            <img
              src={require("../../assets/SF_Hacks_Logo.svg")}
              className="logo"
            />
          </div>
          <div
            className="lp-h1"
            style={{ marginTop: "90px", fontSize: "50px" }}
          >
            {this.state.glitchText}
            {/* {glitchTextOpt[this.state.glitchTextIndex]} */}
          </div>
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              flexDirection: "row",
              minWidth: "300px",
              justifyContent: "space-between"
            }}
          >
            <IconButton
              href="https://www.facebook.com/sfhacks/"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon
                component={Facebook_Icon}
                viewBox="0 0 90 90"
                style={{ fontSize: "50" }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/sf.hacks/"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon
                component={Instagram_Icon}
                viewBox="0 0 90 90"
                style={{ fontSize: "50" }}
              />
            </IconButton>
            <IconButton
              href="https://twitter.com/SF_Hacks/"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon
                component={Twitter_Icon}
                viewBox="0 0 90 90"
                style={{ fontSize: "50" }}
              />
            </IconButton>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default LandingPage;
