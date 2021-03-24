import React, { useState } from "react";
import SFHACKS_Logo from "../assets/SF_Hacks_Logo.png";
import "../styles/Navbar.css";
import {
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  withWidth
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Navbar = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navLinks = [
    // {
    //   title: "SCHEDULE",
    //   link: "#"
    // },
    {
      title: "FAQ",
      link: "#ourFAQ"
    },
    {
      title: "SPONSORS",
      link: "#ourSponsors"
    }
  ];

  const applyButton = (
    <a href="https://sfhacks2021.typeform.com/to/jGdkmdK8" target="_blank">
      <Button variant="contained" className="landing-button">
        Apply Now
      </Button>
    </a>
  );

  return (
    <div>
      <div
        style={{
          height: 90,
          width: "100%",
          backgroundColor: "#FFFFFF",
          paddingTop: 0,
          paddingBottom: 0,
          borderBottomWidth: 5,
          // borderBottomStyle: "solid",
          // borderBottomColor: "#7a42c8",
          boxShadow: "0 3px 10px 5px RGBA(124, 67, 203, 0.5)",
          position: "fixed",
          top: 0,
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {props.width === "xs" || props.width === "sm" ? (
          <div style={{ marginLeft: 50 }}>
            <Button onClick={() => setDrawerOpen(!drawerOpen)}>
              <img src={SFHACKS_Logo} style={{ height: 80, width: "auto" }} />
            </Button>
          </div>
        ) : (
          <>
            <div
              style={{
                marginLeft: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img src={SFHACKS_Logo} style={{ height: 80, width: "auto" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <ul
                style={{
                  // paddingTop: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 180,
                  font: "normal normal normal 19px/28px Open Sans"
                }}
              >
                {navLinks.map(navLink => (
                  <li key={navLink.title} style={{ paddingRight: 70 }}>
                    <a href={navLink.link}>{navLink.title}</a>
                  </li>
                ))}
                {/* <li>{applyButton}</li> */}
              </ul>
            </div>
          </>
        )}
        <Drawer
          anchor={"right"}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          style={{ zIndex: "10001" }}
        >
          <div
            style={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              padding: 5,
              paddingTop: 40
            }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          >
            <List>
              {navLinks.map((navLink, index) => (
                <ListItem
                  button
                  key={navLink.title}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a href={navLink.link}>{navLink.title}</a>
                </ListItem>
              ))}
              {/* <ListItem style={{ display: "flex", justifyContent: "center" }}>
                {applyButton}
              </ListItem> */}
            </List>
          </div>
        </Drawer>
      </div>
      <div style={{ height: 90 }} />
      {props.width === "xs" || props.width === "sm" ? (
        <div style={{ position: "fixed", bottom: 0, right: 0 }}>
          <Button
            onClick={() => setDrawerOpen(!drawerOpen)}
            variant="contained"
            style={{
              border: 20,
              margin: 20,
              width: 50,
              height: 50,
              minWidth: 50,
              borderRadius: 120,
              padding: 0,
              backgroundColor: "#6b3ab9",
              color: "#ffffff"
            }}
          >
            <MenuIcon style={{ fontSize: 25 }} />
          </Button>
        </div>
      ) : null}
    </div>
  );
};
export default withWidth()(Navbar);
