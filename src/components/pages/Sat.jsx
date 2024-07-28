import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const satData = [
  { datee: "Aug 24, 2024", donee: "Aug 24, 2024", dtwo: "Aug 13, 2024" },
  { datee: "Oct 5, 2024", donee: "Sep 20, 2024", dtwo: "Sept 24, 2024" },
  { datee: "Nov 2, 2024", donee: "Oct 18, 2024", dtwo: "Oct 22, 2024" },
  { datee: "Dec 7, 2024", donee: "Nov 22, 2024", dtwo: "Nov 26, 2024" },
  { datee: "Mar 8, 2025", donee: "Feb 12,2025", dtwo: "Feb 25 2025" },
  { datee: "May  3, 2025", donee: "April 18, 2025", dtwo: "April 22, 2025" },
  { datee: "June 7, 2025", donee: "May 22,2025", dtwo: "May 27,2025" },
];
const toeflData = [
  {
    sec: "Reading",
    tim: "35 minutes",
    ques: "20 questions",
    des: "Read passages and respond to questions.",
  },
  {
    sec: "Listening",
    tim: "36 minutes",
    ques: "28 questions",
    des: "Answer questions about brief lectures or classroom discussions.",
  },
  {
    sec: "Speaking",
    tim: "16 minutes",
    ques: "4 tasks",
    des: "Talk about a familiar topic and discuss material you read and heard. ",
  },
  {
    sec: "Writing",
    tim: "29 minutes",
    ques: "2 tasks",
    des: "Read a passage, listen to a recording, type your response. Read a passage, listen to a recording, type your response.",
  },
];

function Sat() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor(getRandomColor());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const handleToefl = () => {
    window.open("https://www.toefl.org");
  };
  const handleIelts = () => {
    window.open("https://www.ielts.org");
  };
  const handlegre = () => {
    window.open("https://www.ets.org");
  };
  const handlegmat = () => {
    window.open("https://www.gmac.com");
  };
  return (
    <div className="satCon">
      <div className="sath"></div>
      <div>
        <ul className="satlabel">
          <a href="#sat">SAT</a>
          <a href="#act">ACT</a>
          <a href="#toefl">TOEFL</a>
          <a href="#ielts">IELTS</a>
          <a href="#gre">GRE</a>
          <a href="#gmat">GMAT</a>
        </ul>
      </div>

      <div className="satAll" id="sat">
        <div className="satdiv">
          <h1 style={{ textAlign: "center" }}>SAT</h1>
          <hr style={{ width: "100px", color: "#aaf", marginBottom: "20px" }} />

          <p>
            GIEVA is a Service Provider of the College Board (CB) to oversee SAT
            administration in Nigeria and to promote CB related educational
            products especially AP to expand opportunities for African students
            to develop the skills they need in a competitive world.
          </p>
          <br />
          <p>
            The CB BigFuture program helps students plan for college, pay for
            college, and explore careers to expand opportunities in Nigeria
            specifically and Africa in general.
          </p>

          <br />
          <p>
            The GIEVA assists students who seek to study in the United States,
            Canada and other countries. The GIEVA’s educational placement
            program is a platform for easy access to the college admission
            process. GIEVA facilitates registration, supplies study resources,
            and offers holistic education, advising and learning services
            assisting the students and parents in college education and career
            decision making.
          </p>

          <br />
          <p>
            The CB reaches more than 7 million students a year, helping them
            navigate the path from high school to college and career. The CB is
            a not-for-profit membership organization founded more than 120 years
            ago. We pioneered programs like the SAT® and AP® to expand
            opportunities for students and help them develop the skills they
            need.
          </p>

          <br />
          <p>
            The CB BigFuture® program helps students plan for college, pay for
            college, and explore careers. The most widely known programs of the
            College Board in Nigeria are SAT, and the PSAT/NMSQT. The GIEVA
            HEALS Programs promotes AP and the CB other related educational
            products.
          </p>
          <br />
          <p>
            There are currently nineteen (19) open centers for the SAT test in
            Nigeria:
          </p>
          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <table>
              <tr>
                <th style={{ width: "200px", textAlign: "initial" }}>
                  TEST CENTER
                </th>
                <th style={{ width: "100px", textAlign: "initial" }}>CODE</th>
                <th style={{ width: "200px", textAlign: "initial" }}>
                  LOCATION
                </th>
              </tr>
              <tr>
                <td>Dority Int’l School</td>
                <td>66106</td>
                <td>ABA</td>
              </tr>
              <tr>
                <td>Holy Child Col Ikoyi</td>
                <td>66108</td>
                <td>LAGOS</td>
              </tr>
              <tr>
                <td>Sapatti Int’l School</td>
                <td>66111</td>
                <td>KWARA</td>
              </tr>
              <tr>
                <td>Olam-awu School</td>
                <td>66112</td>
                <td>ABUJA</td>
              </tr>
              <tr>
                <td>Trinity Int’l College Ofada</td>
                <td>66114</td>
                <td>OGUN</td>
              </tr>
              <tr>
                <td>Regina Pacis College</td>
                <td>66116</td>
                <td>ABUJA</td>
              </tr>
              <tr>
                <td>Adorable British Sch</td>
                <td>66418</td>
                <td>ENUGU</td>
              </tr>
              <tr>
                <td>Danbo International</td>
                <td>66133</td>
                <td>KADUNA</td>
              </tr>
              <tr>
                <td>Mikon Institute of Tech</td>
                <td>66132</td>
                <td>BENIN</td>
              </tr>
              <tr>
                <td>American Christian Acad.</td>
                <td>66148 </td>
                <td>IBADAN</td>
              </tr>
              <tr>
                <td>Hillcrest School</td>
                <td>66160</td>
                <td>JOS</td>
              </tr>
              <tr>
                <td>Nigerian Turkish Int’l</td>
                <td>66180</td>
                <td>KADUNA</td>
              </tr>
              <tr>
                <td>Int’l Sch Lagos – UNILAG</td>
                <td>66235</td>
                <td>LAGOS</td>
              </tr>
              <tr>
                <td>Dansol School Ikeja</td>
                <td>66238</td>
                <td>LAGOS</td>
              </tr>
              <tr>
                <td>Olashore Int’l School</td>
                <td>66250</td>
                <td>OSUN</td>
              </tr>
              <tr>
                <td>Grund TVIG Int’l</td>
                <td>66256</td>
                <td>ONITSHA</td>
              </tr>
              <tr>
                <td>Jephtha Com. Sch</td>
                <td>66271</td>
                <td>PORT HARCOURT</td>
              </tr>
              <tr>
                <td>Marist Comp Acad</td>
                <td>66291</td>
                <td>ABIA</td>
              </tr>
              <tr>
                <td>Cradle High school</td>
                <td>66357</td>
                <td>BENIN</td>
              </tr>
            </table>
          </div>
          <p style={{ color: "blue", padding: "20px" }}>
            What else do you have to know about SAT:
          </p>
          <br />
          <ul className="satull">
            <li>
              The digital SAT consists of evidence-based reading and writing,
              and Mathematics
            </li>
            <li>
              Candidates, willing to transfer their college/ university-earned
              credits from their home-country could also write the SAT, to be
              able to transfer such credits.
            </li>
            <li>
              The digital SAT is currently written in 19 centers in Nigeria.
            </li>
            <li>
              Currently the Test is written six times in a year (August 2024,
              October 2024, November 2024, December2024, March 2025, May 2025,
              June 2025).{" "}
            </li>
            <li>
              With effect from March 2024, the SAT administration has become the
              Digital SAT world-wide. <br />
            </li>
            <br />
          </ul>
          <div className="satdates">
            <h2>Test Dates</h2>
            <p>
              These test dates and deadlines apply to all students (U.S. and
              international) taking the SAT
            </p>
            <table>
              <tr>
                <th>SAT DATE</th>
                <th>Reg. Deadline</th>
                <th title="Deadline for changes, Regular cancellation, and Late Registration">
                  Deadline 2
                </th>
              </tr>
              {satData.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.datee}</td>
                    <td>{val.donee}</td>
                    <td>{val.dtwo}</td>
                  </tr>
                );
              })}
            </table>
            <p style={{ padding: "20px" }}>
              Students who need to borrow a device from College Board will need
              to register and request their device earlier than the registration
              deadline —at least 30 days before test day. Late registration is
              available worldwide. Additional fees apply.
            </p>
          </div>
          <h3>ANTICIPATED 2O25-26 TEST DATES</h3>
          <div className="anticiatedDate">
            <ul className="antidate">
              <li>AUG 23, 2025</li>
              <li>OCT 4, 2025</li>
              <li>NOV 8, 2025</li>
              <li>DEC 6, 2025</li>
              <li>MAR 14, 2026</li>
              <li>MAY 2, 2026</li>
              <li>JUNE 6 , 2026</li>
            </ul>
            <a href="https://www.collegeboard.org/">Read more</a>
          </div>
          <br />
        </div>
      </div>
      <div className="act" id="act">
        <div className="actimg"></div>
        <div className="actbody">
          <p>
            ACT is transforming college and career readiness pathways so that
            everyone can discover and fulfill their potential. Grounded in more
            than 65 years of research, ACT’s learning resources, assessments,
            research, and work-ready credentials are trusted by students, job
            seekers, educators, schools, government agencies, and employers in
            the U.S. and around the world to help people achieve their education
            and career goals at every stage of life.
          </p>
          <ul className="actlist">
            <li>
              ACT is written by candidates who desire to pursue their
              undergraduate studies in the U.S.
            </li>
            <li>There is the ACT with writing and ACT without writing.</li>
            <li>ACT is currently registered and written in Nigeria.</li>
            <li>The Test is written five times in a year.</li>
            <li>More information is available at act</li>
          </ul>
        </div>
      </div>
      <div className="toefl" id="toefl">
        <div className="toeflimg"></div>
        <div className="toeflbody">
          <h3>TEST OF ENGLISH AS A FOREIGN LANGUAGE (TOEFL)</h3>
          <p>
            When you choose TOEFL iBT to show your English proficiency,
            universities notice and know you’re ready to succeed. Accepted by
            more than 13,000 universities and other institutions in over 160
            countries, and preferred worldwide, the TOEFL iBT is the world's
            premier English-language test for study, work and immigration.
          </p>
          <br />
          <p>
            The TOEFL iBT test has four sections: Reading, Listening, Speaking
            and Writing.
          </p>
          <br />
          <h2>Test time</h2>
          <p>
            The total test takes just under 2 hours to complete, but you should
            plan for 2.5 hours, allowing 30 minutes for check in.
          </p>{" "}
          <br />
          <h3>Test sections overview</h3>
          <p>
            Use the table below to view the breakdown of each TOEFL iBT test
            section.
          </p>
          <br />
          <table className="tofl">
            <tr>
              <th>Section</th>
              <th>Estimated Timing</th>
              <th>Questions</th>
              <th>Tasks Description</th>
            </tr>
            {toeflData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.sec}</td>
                  <td>{val.tim}</td>
                  <td>{val.ques}</td>
                  <td>{val.des}</td>
                </tr>
              );
            })}
          </table>
          <br />
          <p>
            The test measures the ability of non- native speakers of English
          </p>
          <p>
            It is used to measure your understanding of the language as it is
            spoken, written, or heard.
          </p>
          <p>
            It is an Internet Based Test (IBT) made up of reading, listening,
            Speaking, and writing.
          </p>
          <p>
            Each Section of the four is scored over 30 with a total of 120
            overall
          </p>
          <p>
            It is a requirement for most American & American-based colleges &
            Universities around the world.
          </p>
          <p>Over 8000 colleges use TOEFL scores.</p>
          <p>
            TOEFL Scores are required by licensing agencies and immigration
            authorities in 110 countries.
          </p>
          <br />
          <p>
            For more information on TOEFL{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={handleToefl}
            >
              click here
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="ielts" id="ielts">
        <div className="ieltimage"></div>
        <div className="ieltbody">
          <p>
            International English Language Testing System is an international
            standardized test of English language proficiency for non-native
            English language speakers. It is jointly managed by the British
            Council, IDP and Cambridge English, and was established in 1989
          </p>
          <br />
          <p>
            IELTS is the world’s most popular English language test. It is
            developed by some of the world’s leading experts in language
            assessment and evaluates all of your English skills — reading,
            writing, listening and speaking.
          </p>
          <br />
          <p>
            The test reflects how you’ll use English to study, work and live in
            an English speaking environment. You can take the test at any of our
            official test ceners across the world.
          </p>
          <p>
            For more information{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={handleIelts}
            >
              click here
            </span>
          </p>
        </div>
      </div>
      <div className="gre" id="gre">
        <div className="greimage"></div>
        <div className="grebody">
          <p>
            The Graduate Record Examinations is a standardized test that is part
            of the admissions process for many graduate schools in the United
            States and Canada and a few other countries. The GRE is owned and
            administered by Educational Testing Service.
          </p>
          <br />
          <p>
            The GRE General Test for admission to thousands of graduate,
            business and law school programs worldwide Currently, testing is
            done at three locations in Nigeria. Abuja, Lagos, and Port Harcourt.
          </p>
          <br />

          <p>
            For more information{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={handlegre}
            >
              click here
            </span>{" "}
            or <Link to={"Contact"}>Contact us</Link> for assistance
          </p>
        </div>
      </div>
      <div className="gmat" id="gmat">
        <div className="gmatimage"></div>
        <div className="gmatbody">
          <p>
            Launched in 1953, the GMAT exam was created by business schools for
            business schools to assist with the business school admissions
            process. Since its creation, the GMAT has constantly evolved to meet
            the needs of business schools and candidates.
          </p>
          <br />
          <p>
            The Graduate Management Admission Test is a computer adaptive test
            intended to assess certain analytical, quantitative, verbal, and
            data literacy skills for use in admission to a graduate management
            program, such as a Master of Business Administration program.
          </p>
          <br />
          <p>
            Graduate Management Admission Test is administered by Graduate
            Management Admission Council or GMAC
          </p>
          <br />
          <p>
            GMAT is required for admission to most U.S., Canadian and European
            business schools, and management programs.
          </p>
          <br />
          <p>
            The result is also needed for admission to business PhD programs,
            such as Harvard Business School.
          </p>
          <p>
            GMAT exam does not test any specific knowledge in business or other
            specified subjects
          </p>
          <br />

          <p>
            For more information{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={handlegmat}
            >
              click here
            </span>{" "}
          </p>
        </div>
      </div>
      <p style={{ marginBottom: "40px" }}>
        We are at your service. You can always{" "}
        <Link onClick={scrollToTop} to={"/Contact"}>
          Contact us
        </Link>{" "}
        for assistance
      </p>
    </div>
  );
}

export default Sat;
