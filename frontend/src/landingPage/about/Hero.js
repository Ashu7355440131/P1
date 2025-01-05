import "./HeroAbout.css";
import React from "react";
function Hero() {
  const removeListItemDots = () => {
    const style = document.createElement("style");
    style.innerHTML = `
            ul {
                list-style-type: none;
                padding: 0;
            }
        `;
    document.head.appendChild(style);
  };

  removeListItemDots();
  return (
    <div className="container">
      <div className="row heroAbout">
        <div className="col-12 col-md-8  ashutosh">
          <img src="/media/images/ashu.png" alt="Ashutosh Prajapati"></img>
        </div>
        <div className="col-12 col-md-8 text-center text-md-left">
          <h2>High School and Intermediate Study</h2>
          <h5>Arjun Prasad Intermediate College</h5>
          <p>Khajuri,Mirjamurad,Varanasi,Uttar Pradesh, 221311</p>
          <ul>
            <li>
              87.50% High School,2020<br/>
              87.20% Intermediate,2022
              <br />
              Class 9th and 11th Class Topper
            </li>
            <li>Class 12th District Position in top 10</li>
            <li>Free Coaching Education Fund For JEE Exam</li>
          </ul>
        </div>
      </div>
      <div className="row heroAbout">
        <div className="col-12 col-md-8 text-center text-md-left">
          <h1>Hello</h1>
          <h1>I'm Ashutosh Prajapati</h1>
          <h3>
            A Student of <br></br> National Institute Of Technology Patna
          </h3>
          <br />
          <ul>
            <li>
              Proficient in Data Structrue and Algorithim
              <br />
              Competitive Programmer
            </li>
            <li>Full Stack (MERN) Developer</li>
            <li>Proficient in C, C++, JAVA, Python </li>
          </ul>
        </div>
        <div className="col-12 col-md-8  ashutosh">
          <img src="/media/images/class 10.jpg" alt="Ashutosh Prajapati" className="img"></img>
        </div>
      </div>
      <div className="row heroAbout">
      <div className="col-12 col-md-8  ashutosh">
          <img src="/media/images/ashu.png" alt="Ashutosh Prajapati"></img>
        </div>
        <div className="col-12 col-md-8 text-center text-md-left">
          <h1>Hello</h1>
          <h1>I'm Ashutosh Prajapati</h1>
          <h3>
            A Student of <br></br> National Institute Of Technology Patna
          </h3>
          <br />
          <ul>
            <li>
              Proficient in Data Structrue and Algorithim
              <br />
              Competitive Programmer
            </li>
            <li>Full Stack (MERN) Developer</li>
            <li>Proficient in C, C++, JAVA, Python </li>
          </ul>
        </div>
        
      </div>
      <div className="row heroAbout">
        <div className="col-12 col-md-8 text-center text-md-left">
          <h1>Hello</h1>
          <h1>I'm Ashutosh Prajapati</h1>
          <h3>
            A Student of <br></br> National Institute Of Technology Patna
          </h3>
          <br />
          <ul>
            <li>
              Proficient in Data Structrue and Algorithim
              <br />
              Competitive Programmer
            </li>
            <li>Full Stack (MERN) Developer</li>
            <li>Proficient in C, C++, JAVA, Python </li>
          </ul>
        </div>
        <div className="col-12 col-md-8  ashutosh">
          <img src="/media/images/nit2.jpg" alt="Ashutosh Prajapati" className="img"></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
