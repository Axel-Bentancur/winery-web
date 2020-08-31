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
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
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
    </div>
  );
}

export default App;
