import React from "react";
import Accordion from "../components/Accordion";
import "../styles/FAQSection.css";
import faqBackground from "../assets/faq/faqBg.svg";

const FAQSection = () => {
  const faqs = [
    {
      q: "What is a hackathon?",
      a:
        "A hackathon is an event where individuals create innovative projects via technology in a short time period. There are competitions, games, workshops, and so much more. A truly great way to expose yourself to the world of computer science!"
    },
    {
      q: "Why should I attend a virtual hackathon?",
      a:
        "A virtual hackathon highlights the accessibility of the online format. You can compete from anywhere, network with high tech representatives with a click of a button, and it’s all in the comfort of your own home. You control when you leave, join, sleep, eat, and so much more."
    },
    {
      q: "Do you need to know how to code to attend?",
      a:
        "No prior knowledge of computer science is needed! We encourage all levels of coders to attend and will have workshops, mentors, and beginner categories to help all hackers find their start in CS."
    },
    {
      q: "Will you host an in-person hackathon?",
      a:
        "To cope with the current climate, we have decided to cancel our March 2020 hackathon and postpone it to the Spring of 2021. It will be virtual but will be our most unique one yet."
    },
    {
      q: "Is SF Hacks 2021 free and what are the benefits of joining?",
      a:
        "For our upcoming virtual hackathon, admission is free of charge. We will have workshops held by big tech companies, recruiters scouting for potential employees, opportunities for resume boosters, places to network with professionals/professors, game rooms, and so much more! All of this and it’s free of charge? What a steal. ;)"
    },
    {
      q: "How often are SFSU hackathons held?",
      a:
        "We have one every year!"
    },
    {
      q: "What are some benefits of joining?",
      a:
        "By participating in our annual hackathons, you’ll be able to create new memories, meet other hackers, gain coding experience, as well as being able to say you attended our event!"
    },
    {
      q:"Are we able to join/attend at any time within the 3 day period? ",
      a:"Yes! We will be broadcasting our workshops/games on all of our social medias. You can find the Zoom links within the posts and hop on whenever.",
    },
    {
      q: "Do I need a team to join?",
      a:
        "Not at all! While you can work on projects as a team, you can also use the event’s Discord to pair up with others on a project. If you want to ride solo, you can do that as well! "
    },
    {
      q:"How many people can be in a team?",
      a:"We have a limit of five people per team."
    },
    {
      q:"What is the cost of attendance?",
      a:"It's a free event hosted by the SF Hacks Team at San Francisco State University."
    },
    {
      q:"Who can attend?",
      a:"ANY college student regardless of what your major is! You can be an expert to a beginner and we will support you throughout the way."
    },
    {
      q: "When is the next event?",
      a: "You’re in luck! Our next event is on March 5th-7th, 2021. RSVP by clicking the “Apply Now” on this site. We look forward to meeting you. :)"
    },
    {
      q: "Where can I contact the officers?",
      a:
        "You can email us at sfhacksteam@gmail.com. If it’s urgent, join our Discord (linked in our bio) and send us a message. One of us will help within 24 hours! "
    },
    {
      q: "What code of conduct does SF Hacks follow?",
      a:
        "We follow the MLH Code of Conduct. Please read this if you plan to partake in our event!"
    }
  ];

  return (
    <div
      className="mainContainer-1 background-img-1 "
      id="ourFAQ"
      style={{ backgroundImage: `url(${faqBackground})`}}
    >
      <div className="title">
        <span className="heading-2" style={{color:"white", marginTop:"-90px"}}>FAQs</span>
      </div>
      <div className="div-shadow" style={{ background: "white", borderRadius: 20, padding: "10px 0 30px 0" }}>
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
