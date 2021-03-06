import React, { useState, useRef, useEffect } from "react";
import arrow from "../assets/arrow-down.png";
import "../styles/FAQSection.css";

// component for faqs section

const Accordion = props => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: "22px",
    textAlign: "left",
    margin: "2px"
  };

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toggleActive}>
        <span className={active ? "accordion-icon rotate" : "accordion-icon"}>
          <img src={arrow} style={{ width: "20px" }} />
        </span>

        <div>
          <p className="reg-1" style={titleStyle}>{props.q}</p>
        </div>
      </button>

      <div ref={contentRef} className="accordion-content">
        <span className="reg-2 accordion-text">{props.a}</span>
      </div>
    </div>
  );
};

export default Accordion;
