import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="main-nav">
        <div className="main-nav-logo">
          <h1>PSITIO</h1>
        </div>
        <ul className="main-nav-list">
          <li className="main-nav-item">
            <a href="#Home" className="main-nav-link">
              Home
            </a>
          </li>
          <li className="main-nav-item">
            <a href="#Home" className="main-nav-link">
              About
            </a>
          </li>
          <li className="main-nav-item">
            <a href="#Home" className="main-nav-link">
              Wines
            </a>
          </li>
          <li className="main-nav-item">
            <a href="#Home" className="main-nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="side-left-content">
          <div className="side-left">
            <div className="links">
              <ul className="links-list">
                <li className="link-item">
                  <a href="#instagram" className="link-link">
                    Instagram
                  </a>
                </li>
                <li className="link-item">
                  <a href="#twitter" className="link-link">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="side-middle">
          <div className="middle-content">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <div className="line">
              <span className="line-num">Harvest</span>
              <span className="middle-line">a </span>
              <span className="line-num">87</span>
            </div>
          </div>
        </div>
        <div className="side-right-content">
          <div className="side-right">
            <div className="links">
              <ul className="links-list">
                <li className="link-item">
                  <a href="#email" className="link-link">
                    psitio@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="svg svg-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,224L26.7,192C53.3,160,107,96,160,80C213.3,64,267,96,320,128C373.3,160,427,192,480,181.3C533.3,171,587,117,640,90.7C693.3,64,747,64,800,101.3C853.3,139,907,213,960,250.7C1013.3,288,1067,288,1120,245.3C1173.3,203,1227,117,1280,96C1333.3,75,1387,117,1413,138.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="svg svg-2"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.4,-37.5C49.5,-25.3,61.1,-12.6,64.6,3.5C68.2,19.7,63.7,39.4,51.5,50.9C39.4,62.4,19.7,65.7,-1.2,66.9C-22.1,68.1,-44.2,67.3,-50.5,55.7C-56.7,44.2,-47,22.1,-43.8,3.3C-40.5,-15.6,-43.6,-31.1,-37.4,-43.3C-31.1,-55.5,-15.6,-64.4,-1.5,-62.9C12.6,-61.5,25.3,-49.7,37.4,-37.5Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg className='svg svg-3' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19,13.1C14.4,18.9,-6.5,17.4,-12.4,10.9C-18.3,4.4,-9.1,-7.1,1.3,-6.4C11.8,-5.6,23.6,7.4,19,13.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="svg svg-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,64L26.7,96C53.3,128,107,192,160,208C213.3,224,267,192,320,154.7C373.3,117,427,75,480,69.3C533.3,64,587,96,640,106.7C693.3,117,747,107,800,133.3C853.3,160,907,224,960,245.3C1013.3,267,1067,245,1120,240C1173.3,235,1227,245,1280,218.7C1333.3,192,1387,128,1413,96L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default App;
