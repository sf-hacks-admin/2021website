import React, { useState, useRef, useEffect } from "react";
import arrow from '../assets/arrow-down.png';

// component for faqs section

const Accordion = (props) => {
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
    fontSize: "22px"
  };

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toggleActive}>
        <span className={active ? "accordion-icon rotate" : "accordion-icon"}>
          <img src={arrow} style={{width:'20px'}}/>
        </span>

        <p style={titleStyle}>{props.q}</p>
      </button>

      <div ref={contentRef} className="accordion-content">
        <span className="accordion-text">{props.a}</span>
      </div>
    </div>
  );
};

export default Accordion;
