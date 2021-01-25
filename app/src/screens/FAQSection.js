import React from "react";
import Accordion from "../components/Accordion";
import "../styles/FAQSection.css";
import faqBackground from "../assets/faq/faqBg.svg";

const FAQSection = () => {
  const faqs = [
    // {
    //   q: "What is a hackathon?",
    //   a:
    //     "A hackathon is a 24-hour event where individuals get together for a short period of time to collaborate on a project. The participants work rapidly and often work in groups to achieve their tasks."
    // },
    {
      q: "Why should I attend a virtual hackathon?",
      a:
        "We know a virtual hackathon might sound unorthodox, but we ensure it will be worth your while to join! From our contests to the lighthearted games, there is a place for every gator to contribute. It’ll also be a great chance to try out working on a project with a team remotely."
    },
    {
      q: "Do you need to know how to code to attend?",
      a:
        "No prior knowledge of computer science is needed! We encourage all levels of coders to attend. In our events, we dedicate officers/mentors/tutors to help all hackers find their beginnings in CS."
    },
    // {
    //   q:"When is the next event?",
    //   a:"Look at our calendar (link the calendar page) to check out our following events.",
    // },
    // {
    //   q: "Will you host an in-person hackathon?",
    //   a:
    //     "To cope with the current climate, we have decided to cancel our March 2020 hackathon and postpone it to the Spring of 2021. It will be virtual but will be our most unique one yet."
    // },
    // {
    //   q: "Is the hackathon free, and what will be provided?",
    //   a:
    //     "For our upcoming virtual hackathon, admission is still free of charge, however, food will not be provided. There are things we can offer such as the enjoyable virtual experience through Discord as well as chatting with other fellow hackers!"
    // },
    // {
    //   q: "How often are SFSU hackathons held?",
    //   a:
    //     "SFSU hosts hackathons annually and everyone is invited to create the best experience possible!"
    // },
    // {
    //   q: "What are some benefits of joining?",
    //   a:
    //     "By participating in our annual hackathons, you’ll be able to create new memories, meet other hackers, gain coding experience, as well as being able to say you attended our event!"
    // },
    // {
    //   q:"Are we able to join/attend at any time within the 24-hour period?",
    //   a:"",
    // },
    // {
    //   q: "Do I need a team to join?",
    //   a:
    //     "Not at all! While you absolutely can join the event and work on projects as a team, you can also use the event’s Discord to pair up with others on a project. It’s also okay to just work on something yourself."
    // },
    // {
    //   q:"What is the cost of attendance?",
    //   a:"It's a free event hosted by the SF Hacks Team at San Francisco State University."
    // },
    {
      q: "When is the next event?",
      a:
        ""
    },
    {
      q: "Where can I contact the officers?",
      a:
        "You can email us at sfhacksteam@gmail.com. If it’s urgent, join our Discord (https://discord.gg/7RMDcNU) and send us a message. One of us will help within 24 hours!"
    }
  ];

  return (
    <div className="faq-container" id="ourFAQ" style={{backgroundImage: `url(${faqBackground})`}}>
      <div className="title">
        <span className="headingText1">FAQs</span>
      </div>
      <div style={{background: "white", margin: "150px"}}>
        {faqs.map(faq => (
          <div key={faq.q}>
            <Accordion q={faq.q} a={faq.a} />
            <hr className="faq-hr" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
