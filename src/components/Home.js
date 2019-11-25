import React from 'react';
import github from "../assets/github.png";
import profile from "../assets/profile.png";
import linkedin from "../assets/linkedin.png";
import ExperienceSection from './ExperienceSection'
import { NavLink } from 'react-router-dom'

const flatironschool = {title: "Flatiron School", url: "https://flatironschool.com/"}
const wework = {title: "WeWork", url: "https://www.wework.com/"}
const wholefoodsmarket = {title: "Whole Foods Market", url: "https://www.wholefoodsmarket.com/"}
const titleList = [
  "SENIOR CURRICULUM DESIGNER",
  "SENIOR CURRICULUM WRITER",
  "CURRICULUM WRITER",
  "SOFTWARE ENGINEERING COACH",
  "REGIONAL CUSTOMER SERVICE ASSOCIATE COORDINATOR",
  "CUSTOMER SERVICE TEAM LEADER"
]

const experience = {
  "SENIOR CURRICULUM DESIGNER": {
    companies: [flatironschool, wework],
    dates: ["04/2019", "Present"],
    responsibilities: [
      "Led team projects to update and redesign course materials on both Ruby and React, deployed to hundreds of students",
      "Performed maintenance operations on one of GitHub’s largest organizations",
      "Brought an existing 1500+ GitHub issue count to 0",
      "Improved existing repository linter for maintaining standards across over 1000 repositories",
      "Implemented operating procedures for rolling out Curriculum content",
    ],
    achievements: [

    ]
  },
  "SENIOR CURRICULUM WRITER": {
    companies: [flatironschool, wework],
    dates: ["07/2018","04/2019"],
    responsibilities: [
      "Built Ruby gems to assist in GitHub repository creation and management, improving the consistency and efficiency of repository creation by the Curriculum team",
      "Created, maintained and updated test driven student materials using RSpec for Ruby and Mocha/Chai for JS testing",
      "Managed internal feedback, priority issue tracking and communication with stakeholders through JIRA",
    ],
    achievements: [
      
    ]
  },
  "CURRICULUM WRITER": {
    companies: [flatironschool, wework],
    dates: ["03/2018","07/2018"],
    responsibilities: [
      "Maintained Curriculum through GitHub repositories, resolving critical issues",
      "Created student lessons and assessments for Ruby, Rails, JavaScript and React",
      "Redesigned materials and approach for teaching React/Redux",
    ],
    achievements: [
      
    ]
  },
  "SOFTWARE ENGINEERING COACH": {
    companies: [flatironschool, wework],
    dates: ["08/2017","03/2018"],
    responsibilities: [
      "Taught students in all areas of coursework, including Ruby, Rails, JavaScript, React and Redux",
      "Conducted technical lectures, reviews and community projects",
      "Provided feedback on code and tutoring for students",
    ],
    achievements: [
      
    ]
  },
  "REGIONAL CUSTOMER SERVICE ASSOCIATE COORDINATOR": {
    companies: [wholefoodsmarket],
    dates: ["09/2015","01/2017"],
    responsibilities: [
      "Directly oversaw CS team operations in thirteen stores, conducted audits, as well as, leadership training and reviews",
      "Responsible for cash office operations in thirty-five stores, maintaining standards and introducing operational efficiencies",
      "Conducted regular meetings of 40-80 leaders, hosted conference calls, leadership interviews, and general support as needed",
      "Maintained and advanced the overall Customer Service program for the region (New York, New Jersey, Connecticut)",
      "Worked with executives, marketing, product teams, construction and vendors on store innovations and regional projects",
      "Established operational standards, conducted job fairs and training for new store openings throughout the tri-state"
    ],
    achievements: [
      
    ]
  },
  "CUSTOMER SERVICE TEAM LEADER": {
    companies: [wholefoodsmarket],
    dates: ["07/2014","09/2015"],
    responsibilities: [
      "Led a team of fifty-five Team Members, seven Supervisors and two Associate Team Leaders",
      "Responsible for all operations, including hiring, terminations, corrective conversations, reviews, interviews and daily tasks",
    ],
    achievements: [
      "Recognized for operational efficiency, successful fundraising campaigns, and supporting fellow leaders on operations/systems",
      "Created standardized SQL database program for cash handling, implemented in 35 stores"
    ]
  }
}

function Home() {
  return (
    <div className="App">
      <main>
        <section className="splash">
          <img className="profilePic" src={profile} alt="profile" />
          <div>
            <h1>MAXWELL BENTON</h1>
            <h3>SOFTWARE ENGINEER</h3>
          </div>
        </section>
        <section className="resume">
          <div>
            <p>Hello!</p>
            <p>My name is Maxwell Benton, and I am a software engineer. I currently work as the Senior Curriculum Designer of Software Engineering at <a target="_blank" rel="noopener noreferrer" href="https://flatironschool.com/">Flatiron School</a>, where I design and create coursework for students online and on campuses across the United States.</p>
          </div>
          <div>
              <h3><NavLink className="navlink" to='/#projects'>PROJECTS</NavLink></h3>
          </div>
          <div>
            <h3>CONTACT</h3>
            <li className="contact"><span>Email</span><a target="_blank" rel="noopener noreferrer" href="maxwellbenton@gmail.com">maxwellbenton@gmail.com</a></li>
            <li className="contact"><span>GitHub</span><a target="_blank" rel="noopener noreferrer" href="https://github.com/maxwellrbenton">https://github.com/maxwellrbenton</a></li>
            <li className="contact"><span>LinkedIn</span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maxwellbenton/">https://www.linkedin.com/in/maxwellbenton/</a></li>
          </div>
          <div>
            <h3>EXPERIENCE</h3>
            {titleList.map(title => <ExperienceSection title={title} companies={experience[title].companies} responsibilities={experience[title].responsibilities} dates={experience[title].dates} achievements={experience[title].achievements}/>) }
          </div>
          <div>
            <h3>EDUCATION</h3>
            <li className="education"><b>2017 - Flatiron School</b>Full Stack Web Development, Ruby on Rails, JavaScript</li>
            <li className="education"><b>2008 - Hunter College</b>Bachelor of the Arts, English Literature and Theory</li>
          </div>
        </section>
      </main>
      <section className="linksSection">
        <span><a target="_blank" rel="noopener noreferrer" href="https://github.com/maxwellrbenton"><img className="exlink" src={github} alt="github"/></a></span>
        <span><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maxwellbenton/"><img className="exlink" src={linkedin} alt="linkedin"/></a></span>
        
      </section>
      <section className="navigation">
      
      </section>
    </div>
  );
}

export default Home;
