import React from "react";

function Sat() {
  return (
    <div className="satCon">
      <div className="sath"></div>

      <div className="satAll">
        <div style={{ padding: "30px" }}>
          <p>
            GIEVA is the current International Representative for the SAT in
            Nigeria. With this partnership with ETS since 2007, we have aided
            students who seek to study in the United States and other countries,
            with a platform for easy access to registration materials and
            preparatory books that will allow them achieve their goals. The
            College Board founded 1900 is an association of more than 5,200
            schools, colleges, universities and other educational organizations.
          </p>
          <br />
          <p>
            The College Board serves more than seven million students and their
            parents using major programs and services in college admissions,
            guidance, financial aid, assessment, and enrollments. The most
            widely known programs of the College Board are SAT, and the
            PSAT/NMSQT.
          </p>

          <br />
          <p>
            There are currently seventeen (17) open centers for the SAT test in
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
                <td>66106</td>
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
                <td>Olamawu School</td>
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
            </table>
          </div>
          <p style={{ color: "blue" }}>
            For GIEVA-Assisted SAT Registrations, applicants (or organizations)
            need to simply send a completed registration form to{" "}
            <a href="contact@gieva.org">contact@gieva.org</a>
          </p>
          <br/>
          <ul>
            <li>
              SAT The digital SAT consists of evidence-based reading and
              writing, and Mathematics.
            </li>
            <li>
              Candidates, willing to transfer their college/ university-earned
              credits from their home-country could also write the SAT, to be
              able to transfer such credits.
            </li>
            <li>
              The digital SAT is currently written in over 20 centers and
              administered by GIEVA in Nigeria.
            </li>
            <li>Currently the Test is written seven times in a year.</li>
            <li>
              With effect from March 2023, the SAT has become a digital test.{" "}
              <a href="https://www.collegeboard.org/">Read more</a>
            </li>
            <br/>
          </ul>
          <br />
          <div className="acth"></div>
          <h2 style={{textAlign:"center", margin:"20px"}}>ACT</h2>
          <ul>
            <li>
              ACT is written by candidates who desire to pursue their
              undergraduate studies in the U.S. and other parts of the world.
            </li>
            <li>There is the ACT with writing and ACT without writing.</li>
            <li>ACT is currently registered and written in Nigeria.</li>
            <li>
              The Test is written five times in a year.{" "}
              <a href="https://www.act.org/">Read more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sat;
