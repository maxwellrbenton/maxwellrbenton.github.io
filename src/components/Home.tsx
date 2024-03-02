import "../App.css";
import github from "../assets/github.png";
import profile from "../assets/profile.png";
import linkedin from "../assets/linkedin.png";

const zigatta = {
  title: "Improving (formerly Zigatta)",
  url: "https://www.improving.com/",
};
const mastercard = {
  title: "on assignment to Mastercard",
  url: "https://www.mastercard.com/",
};
const flatironschool = {
  title: "Flatiron School",
  url: "https://flatironschool.com/",
};
const wework = { title: "WeWork", url: "https://www.wework.com/" };
const wholefoodsmarket = {
  title: "Whole Foods Market",
  url: "https://www.wholefoodsmarket.com/",
};
const titleList = {
  SERVICE_ARCHITECT: "SERVICE ARCHITECT",
  SENIOR_FRONTEND_ENGINEER: "SENIOR FRONTEND ENGINEER",
  CURRICULUM_MANAGER: "CURRICULUM MANAGER",
  SOFTWARE_ENGINEER: "SOFTWARE ENGINEER",
  SENIOR_CURRICULUM_DESIGNER: "SENIOR CURRICULUM DESIGNER",
  SENIOR_CURRICULUM_WRITER: "SENIOR CURRICULUM WRITER",
  CURRICULUM_WRITER: "CURRICULUM WRITER",
  SOFTWARE_ENGINEERING_COACH: "SOFTWARE ENGINEERING COACH",
  REGIONAL_CUSTOMER_SERVICE_ASSOCIATE_COORDINATOR:
    "REGIONAL CUSTOMER SERVICE ASSOCIATE COORDINATOR",
  CUSTOMER_SERVICE_TEAM_LEADER: "CUSTOMER SERVICE TEAM LEADER",
};

const experience: Record<string, Record<string, any>> = {
  [titleList.SERVICE_ARCHITECT]: {
    companies: [zigatta, mastercard],
    dates: ["02/2023", "Present"],
    responsibilities: [
      "Led service design work for critical and greendfield engineering initiatives",
      "Presented project proposals to executives and company leadership",
      "Coordinated with architecture, product, biz-ops, and engineering teams regularly",
      "Translated high-level discussions to low-level designs and sprint stories",
      "Created design documentation, risk assessments, UML diagrams, roadmaps, and rollout strategies",
      "Supported engineering management, running regular team meetings and filling in as tech lead as needed",
      "Provided training, guidance, and feedback to junior and senior engineers",
    ],
    achievements: [
      "Designed and led the development of a checkout application intended to be the newest online checkout experience for Mastercard",
      "Created a custom post-messaging service for facilitating communication between Mastercard's checkout products and windows maintained by third-party partners, including Samsung",
    ],
  },
  [titleList.SENIOR_FRONTEND_ENGINEER]: {
    companies: [zigatta, mastercard],
    dates: ["03/2021", "02/2023"],
    responsibilities: [
      "Reliably delivered high-quality, well-tested code to applications used in 35 countries by millions of users",
      "Directly supported international clients on technical and integration issues",
      "Built and deployed products consumed by major payment service providers and online retailers, including Toast, Adyen, AliPay",
      "Wrote and edited public documentation for Mastercard products",
    ],
    achievements: [
      "Voted MVP of the team by my peers for 2023",
      "Made significant contributions to programs recognized as most impactful by Mastercard leadership in 2023",
    ],
  },
  [titleList.CURRICULUM_MANAGER]: {
    companies: [flatironschool, wework],
    dates: ["12/2020", "03/2021"],
    responsibilities: [
      "Redesigned and modernized the Flatiron School software engineering curriculum",
      "Led a team of expert instructors, curriculum writers, and specialists",
      "Coordinated with product managers, engineers, and educators on training, support, and product launches",
      "Migrated the Flatiron School software engineering curriculum to the Canvas learning management system",
    ],
    achievements: [],
  },
  [titleList.SOFTWARE_ENGINEER]: {
    companies: [flatironschool, wework],
    dates: ["05/2020", "12/2020"],
    responsibilities: [
      "Created tooling for bulk migration of curriculum content from GitHub to the Canvas LMS",
      "Implemented student-facing feedback systems for tracking the success of individual pieces of curriculum",
    ],
    achievements: [],
  },
  [titleList.SENIOR_CURRICULUM_DESIGNER]: {
    companies: [flatironschool, wework],
    dates: ["04/2019", "05/2020"],
    responsibilities: [
      "Led a team on projects to update and redesign course materials on JavaScript, React, and Ruby",
      "Built tools to assist in content creation and monitor the health of Flatiron School’s curriculum content",
    ],
    achievements: [],
  },
  [titleList.SENIOR_CURRICULUM_WRITER]: {
    companies: [flatironschool, wework],
    dates: ["07/2018", "04/2019"],
    responsibilities: [
      "Built Ruby gems to assist in GitHub repository creation and management, improving the consistency and efficiency of repository creation by the Curriculum team",
      "Created, maintained and updated test driven student materials using RSpec for Ruby and Mocha/Chai for JS testing",
      "Managed internal feedback, priority issue tracking and communication with stakeholders through JIRA",
    ],
    achievements: [],
  },
  [titleList.CURRICULUM_WRITER]: {
    companies: [flatironschool, wework],
    dates: ["03/2018", "07/2018"],
    responsibilities: [
      "Maintained Curriculum through GitHub repositories, resolving critical issues",
      "Created student lessons and assessments for Ruby, Rails, JavaScript and React",
      "Redesigned materials and approach for teaching React/Redux",
    ],
    achievements: [],
  },
  [titleList.SOFTWARE_ENGINEERING_COACH]: {
    companies: [flatironschool, wework],
    dates: ["08/2017", "03/2018"],
    responsibilities: [
      "Taught students in all areas of coursework, including Ruby, Rails, JavaScript, React and Redux",
      "Conducted technical lectures, reviews and community projects",
      "Provided feedback on code and tutoring for students",
    ],
    achievements: [],
  },
  [titleList.REGIONAL_CUSTOMER_SERVICE_ASSOCIATE_COORDINATOR]: {
    companies: [wholefoodsmarket],
    dates: ["09/2015", "01/2017"],
    responsibilities: [
      "Directly oversaw CS team operations in thirteen stores, conducted audits, as well as, leadership training and reviews",
      "Responsible for cash office operations in thirty-five stores, maintaining standards and introducing operational efficiencies",
      "Conducted regular meetings of 40-80 leaders, hosted conference calls, leadership interviews, and general support as needed",
      "Maintained and advanced the overall Customer Service program for the region (New York, New Jersey, Connecticut)",
      "Worked with executives, marketing, product teams, construction and vendors on store innovations and regional projects",
      "Established operational standards, conducted job fairs and training for new store openings throughout the tri-state",
    ],
    achievements: [],
  },
  [titleList.CUSTOMER_SERVICE_TEAM_LEADER]: {
    companies: [wholefoodsmarket],
    dates: ["07/2014", "09/2015"],
    responsibilities: [
      "Led a team of fifty-five Team Members, seven Supervisors and two Associate Team Leaders",
      "Responsible for all operations, including hiring, terminations, corrective conversations, reviews, interviews and daily tasks",
    ],
    achievements: [
      "Recognized for operational efficiency, successful fundraising campaigns, and supporting fellow leaders on operations/systems",
      "Created standardized SQL database program for cash handling, implemented in 35 stores",
    ],
  },
};

function Home() {
  return (
    <div className="App">
      <main>
        <section className="linksSection">
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/maxwellbenton"
            >
              <img className="exlink" src={github} alt="github" />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/maxwellbenton/"
            >
              <img className="exlink" src={linkedin} alt="linkedin" />
            </a>
          </span>
        </section>
        <section className="splash">
          <img className="profilePic" src={profile} alt="profile" />
          <div>
            <h1 id="my-name">MAXWELL BENTON</h1>
            <h3 id="my-position">SOFTWARE ENGINEER</h3>
          </div>
        </section>
        <div id="cv">
          <section id="resume">
            <div>
              <p>Hello!</p>
              <p>
                My name is Maxwell Benton, and I am a software engineer. I
                currently work as a contract service architect at Mastercard,
                where I design and engineer online checkout applications.
              </p>
            </div>
            <div>
              <h3>CONTACT</h3>
              <ul>
                <li className="contact">
                  <p>
                    For contact, please email me at maxwellbenton@gmail.com
                    <span className="block-bots" aria-hidden="true"></span>
                  </p>
                </li>
                <li className="contact">
                  <span>GitHub</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/maxwellrbenton"
                  >
                    https://github.com/maxwellrbenton
                  </a>
                </li>
                <li className="contact">
                  <span>LinkedIn</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/maxwellbenton/"
                  >
                    https://www.linkedin.com/in/maxwellbenton/
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>EXPERIENCE</h3>
              {Object.values(titleList).map((title, index) => (
                <div key={index}>
                  <h4>{title}</h4>
                  <h4 className="company">
                    {experience[title].companies.map(
                      (company: any, index: number) => {
                        return (
                          <>
                            {index > 0 ? ", " : ""}
                            <a
                              key={index + company.title}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={company.url}
                            >
                              {company.title}
                            </a>
                          </>
                        );
                      }
                    )}{" "}
                    &mdash;{" "}
                    <i>
                      {experience[title].dates[0]} to{" "}
                      {experience[title].dates[1]}
                    </i>
                  </h4>
                  <ul>
                    {experience[title].responsibilities.map(
                      (responsibility: string, index: number) => (
                        <li key={index}>{responsibility}</li>
                      )
                    )}
                    {!!experience[title].achievements.length && (
                      <h4>Notable Achievements</h4>
                    )}
                    {!!experience[title].achievements.length
                      ? experience[title].achievements.map(
                          (achievement: string, index: number) => (
                            <li key={index}>{achievement}</li>
                          )
                        )
                      : null}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h3>EDUCATION</h3>
              <ul>
                <li className="education">
                  <b>2017 - Flatiron School</b>Full Stack Web Development, Ruby
                  on Rails, JavaScript
                </li>
                <li className="education">
                  <b>2008 - Hunter College</b>Bachelor of the Arts, English
                  Literature and Theory
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
