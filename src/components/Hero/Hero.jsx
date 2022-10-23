import React from "react";
import "./hero.css";
import buildingImg from "../../images/building.jpeg";
import graduationImg from "../../images/Graduation.svg";
import { Link } from "react-router-dom";

export const Hero = () => {
  const degreesArr = [
    {
      id: 1,
      degree: "BCA",
      degreeAbout:
        "The full form of BCA is Bachelors's in Computer Application. BCA is a three-year degree course for people who wish to dive into the world of programming language. BCA is the most popular option for starting a professional life in information technology.",
    },
    {
      id: 2,
      degree: "BScIT",
      degreeAbout:
        "Bachelor of Science in Information Technology.A Bachelor of Science in Information Technology (B.Sc IT) degree program typically takes three to four years depending on the country. This degree is primarily focused on subjects such as software, databases, and networking. In general, computer science degrees tend to focus on the mathematical and theoretical foundations of computing rather than emphasizing specific technologies.",
    },
    {
      id: 3,
      degree: "B.COM",
      degreeAbout:
        "The full form of B.Com is Bachelor of Commerce. B.COM is a three-year undergraduate degree in commerce. It is a Bachelor's degree offered by various universities and colleges in India.",
    },
    {
      id: 4,
      degree: "PGDCA",
      degreeAbout:
        "The full form of PGDCA is Post Graduate Diploma in Computer Application. PGDCA is a postgraduate course available by many Universities in India recognized by UGC. The course duration is one year and includes two semesters.",
    },
  ];
  return (
    <>
      <main className="hero-main">
        <section className="hero-section">
          <div className="left">
            <h1>
              <span>HIMT</span> Best <span>IT College</span> in Hoshiarpur
            </h1>
            <p>
              "Hari Prakash Institute of management and technology Affiliated
              with Punjab technical University. Also known as HIMT College." You
              got best learning from our college. This is our promise.
            </p>
            <Link to="/about">
              <button>Learn more</button>
            </Link>
          </div>
          <div className="right">
            <img src={buildingImg} alt="building img" />
          </div>
        </section>
        <section className="degree-section">
          <h1 className="mid-heading">
            What I <span>Provide</span>
          </h1>
          <div className="degree-con">
            {degreesArr.map(({ id, degree, degreeAbout }) => {
              return (
                <div className="degree" key={id}>
                  <div className="degree-head">
                    <img src={graduationImg} width={80} alt="graduation img" />
                    <h1>{degree}</h1>
                  </div>
                  <div className="degree-txt">{degreeAbout}</div>
                  <button>Learn more</button>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};
