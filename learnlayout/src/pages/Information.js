import React from "react";
import {Link} from "react-router-dom";
import extension from "../assets/extension.png";
import extension_window from "../assets/extension_window.png";
import nyt from "../assets/nyt.png";
import wsj from "../assets/wsj.png";
import twp from "../assets/twp.png";

function Information() {
  return (
    <div className="landing-content-area">
      <div className="landing-top-container">
        <div className="exp-container">
          <div className="exp-right">
            <img src={extension} className="landing-extension" alt="HPE Badge"></img>
          </div>
          <div className="exp-left">
          <div className="landing-name-title">Learn Layout</div>
          <div className="landing-subtitle">Your New Favorite Chrome Extension</div>
            <div className="landing-middle-content">
                <div className="landing-bottom-text">
                  A Chrome extension that understands your preferred learning style and adapts website content to your needs.
                </div>
            </div>
            <div className="landing-install">
              Install Now
            </div>
          </div>
        </div>
      </div>
      <div className="landing-tiles-container">
        <Link to='https://www.nytimes.com/'>
          <div className="landing-tile">
            <img src={nyt} className="landing-tile-content" alt="New York Times"></img>
          </div>
        </Link>
        <Link to='https://www.wsj.com/'>
          <div className="landing-tile">
            <img src={wsj} className="landing-tile-content" alt="Wall Street Journal"></img>
          </div>
        </Link>
        <Link to='https://www.washingtonpost.com/'>
          <div className="landing-tile">
            <img src={twp} className="landing-tile-content" alt="The Washington Post"></img>
          </div>
        </Link>
      </div>
      <div className="landing-top-container">
        <div className="landing-break-content">
          <div className="landing-bottom-text">We make content accessible to all types of learners.</div>
        </div>
      </div>
      <div className="landing-top-container">
        <div className="landing-middle-content">
          <div className="exp-left">
            <img src={extension_window} className="landing-extension-window" alt="HPE Badge"></img>
          </div>
          <div className="exp-right-nc">
            <div className="landing-directions-title">
              How it Works:
            </div>
            <div className="landing-directions">
              1. Install our extension
            </div>
            <div className="landing-directions">
              2. Take a short quiz
            </div>
            <div className="landing-directions">
              3. Find an article
            </div>
            <div className="landing-directions">
              4. Toggle the extension
            </div>
          </div>
        </div>
      </div>
      <div className="landing-tiles-container">
        <Link to='/resources' className="landing-learning-style-card">
          <div>
            Reading/Writing
          </div>
        </Link>
        <Link to='/resources' className="landing-learning-style-card">
          <div>
            Auditory
          </div>
        </Link>
        <Link to='/resources' className="landing-learning-style-card">
          <div>
            Visual
          </div>
        </Link>
      </div>
      <div className="landing-top-container">
        <div className="landing-top-content">
          <div className="landing-bottom-text">If you would like to learn more about learn layout, feel free to contact help@learnlayout.com directly or continue to explore this site.</div>
        </div>
      </div>
    </div>
  );
};
  
export default Information;