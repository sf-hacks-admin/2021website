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

const Navbar = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navLinks = [
    {
      title: "SCHEDULE",
      link: "#"
    },
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
    <Button variant="contained" className="landing-button">
      Apply Now
    </Button>
  );
  return (
    <div>
      <div
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "#FFFFFF",
          paddingTop: 0,
          paddingBottom: 0,
          borderBottomWidth: 5,
          borderBottomStyle: "solid",
          borderBottomColor: "#7a42c8",
          boxShadow: "0 4px 20px 10px RGBA(124, 67, 203, 0.5)",
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
            <div style={{ marginLeft: 50 }}>
              <img src={SFHACKS_Logo} style={{ height: 80, width: "auto" }} />
            </div>
            <div>
              <ul
                style={{
                  paddingTop: 10,
                  paddingRight: 150,
                  font: "normal normal normal 19px/28px Open Sans"
                }}
              >
                {navLinks.map(navLink => (
                  <li key={navLink.title}>
                    <a href={navLink.link}>{navLink.title}</a>
                  </li>
                ))}
                <li>{applyButton}</li>
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
              <ListItem style={{ display: "flex", justifyContent: "center" }}>
                {applyButton}
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
      <div style={{ height: 80 }} />
    </div>
  );
};
export default withWidth()(Navbar);
