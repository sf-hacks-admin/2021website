import React, { useEffect, useState } from "react";

import { ReactComponent as Instagram_Icon } from "../../assets/Instagram_Icon.svg";
import { ReactComponent as Facebook_Icon } from "../../assets/Facebook_Icon.svg";
import { ReactComponent as Twitter_Icon } from "../../assets/Twitter_Icon.svg";

import Link from "@material-ui/core/Link";
import { SvgIcon, Icon, IconButton } from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

// const anime = require("animejs");

import anime from "animejs/lib/anime.es";

var $ = require("jquery");

// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function replaceAt(str, index, replacement) {
//   return (
//     str.substr(0, index) + replacement + str.substr(index + replacement.length)
//   );
// }

// function timeout(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// const glitchTextOpt = [
//   "SAN FRANCISCO STATE UNIVERSITY",
//   "ALL HACKERS WELCOME"
//   // "COMING SOON"
// ];
function LandingPage(props) {
  // state = {
  //   glitchTextIndex: 0,
  //   glitchText: glitchTextOpt[0]
  // };

  // componentDidMount() {
  //   const glitchTextChange = async () => {
  //     var oldtext = glitchTextOpt[this.state.glitchTextIndex];

  //     var nextIndex;
  //     if (this.state.glitchTextIndex === 1) {
  //       nextIndex = 0;
  //       newtext = glitchTextOpt[0];
  //     } else {
  //       nextIndex = this.state.glitchTextIndex + 1;
  //       newtext = glitchTextOpt[this.state.glitchTextIndex + 1];
  //     }
  //     var newtext = glitchTextOpt[nextIndex];
  //     const glitch = async index => {
  //       const randText = "!<>-_\\/[]{}—=+*^?#_()__";
  //       var replacementChar = "^";
  //       for (let i = 0; i < getRandom(2, 8); i++) {
  //         replacementChar = randText[getRandom(0, randText.length - 1)];
  //         this.setState({
  //           glitchText: replaceAt(this.state.glitchText, index, replacementChar)
  //         });
  //         await timeout(8);
  //       }
  //     };

  //     let orgLength = Math.max(oldtext.length, newtext.length);

  //     if (newtext.length > orgLength) {
  //       oldtext = oldtext + " ".repeat(newtext.length - orgLength);
  //     }

  //     for (let i = 0; i < orgLength; i++) {
  //       await glitch(i);

  //       if (i >= newtext.length) {
  //         oldtext = replaceAt(oldtext, i, " ");
  //         this.setState({
  //           glitchText: oldtext
  //         });
  //       } else {
  //         oldtext = replaceAt(oldtext, i, newtext[i]);
  //         this.setState({
  //           glitchText: oldtext
  //         });
  //       }
  //     }

  //     this.setState({
  //       glitchTextIndex: nextIndex,
  //       glitchText: newtext
  //     });
  //   };

  //   this.glitchTimeout = setInterval(() => {
  //     glitchTextChange();
  //   }, 4.5 * 1000);
  // }

  // componentDidUnmount() {
  //   clearInterval(this.glitchTimeout);
  // }

  //   componentDidUpdate(prevProps, prevState, snapshot) {
  //     if (this.state.glitchTextIndex !== prevState.glitchTextIndex) {
  //       this.setState({
  //         glitchText: glitchTextOpt[this.state.glitchTextIndex]
  //       });
  //     }
  //   }

  // render() {

  useEffect(() => {
    $(".ml11 .letters").each(function() {
      $(this).html(
        $(this)
          .text()
          .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
      );
    });
    var ml = { timelines: {} };
    ml.timelines["ml11"] = anime
      .timeline({ loop: false })
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: ".ml11 .line",
        translateX: [0, $(".ml11 .letters").width()],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: function(el, i) {
          return 34 * (i + 1);
        }
      });
  }, []);

  return (
    <div style={{ height: "100vh", minHeight: 600 }}>
      <div
        id="lp-main-container"
        style={{
          minHeight: "88vh"
        }}
      >
        <div>
          <img
            src={require("../../assets/SF_Hacks_Logo.png")}
            className="logo"
          />
        </div>
        <div
          className="lp-h1 glitch"
          style={{ marginTop: "-50px", textAlign: "center" }}
        >
          <div class="moving-letters">
            <span class="ml11">
              <span class="text-wrapper">
                <span class="line line1"></span>
                <span class="letters"> ALL HACKERS WELCOME</span>
              </span>
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "row",
            minWidth: "250px",
            justifyContent: "space-between"
          }}
        >
          <Link
            href="https://www.facebook.com/sfhacks/"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon
              component={Facebook_Icon}
              viewBox="0 0 90 90"
              style={{ fontSize: "65" }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/sf.hacks/"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon
              component={Instagram_Icon}
              viewBox="0 0 90 90"
              style={{ fontSize: "65" }}
            />
          </Link>
          <Link
            href="https://twitter.com/SF_Hacks/"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon
              component={Twitter_Icon}
              viewBox="0 0 90 90"
              style={{ fontSize: "65" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
// }

export default LandingPage;
