import React from "react";
import {Link} from "react-router-dom";
import linkedIn from "../assets/linkedin_profile.png";
import linkedInLogo from "../assets/linkedin_logo.png";

const Profile = () => {
  return (
    <div>
    <div className="landing-content-area">
      <div className="landing-top-container">
        <div className="landing-left">
          <div className="landing-left-container">
            <div className="landing-top-content">
              <div className="landing-name-title">LUCAS VORON</div>
              <div className="landing-subtitle">lvoron@scu.edu</div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Visual - 60%</div>
              <div className="landing-top-text">What We Recommend:<br></br>
                - heavily using charts, graphs, and pictures when learning new content <br></br>
                - highlighting key points and terms <br></br>
                - write to-do lists <br></br>
                - in the classroom, make a conscious effort to see the lecturer </div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Reading - 25%</div>
              <div className="landing-top-text">For your learning style, we recommend using a combination or reading and visual learning styles to get the most out of material. Based on your information, our analytics recommend reading content and taking breaks in between to visually draw out what you understand.</div>
            </div>
            <div className="landing-bottom-content">
              <div className="landing-top-title">Auditory - 15%</div>
              <div className="landing-top-text">This is the most popular learning style. Because you rank this so low based on your quiz results, we recommend to always use this in conjunction with another technique. For example, taking notes in a lecture or drawing out what you recall visually afterwards. </div>
            </div>
          </div>
        </div>
        <div className="landing-right">
          <Link to='https://www.linkedin.com/in/lucasvoron/'>
            <div className="landing-top-image-container">
              <img src={linkedIn} className="landing-image" alt="waste graphic 3" />
              <div className="linkedin-logo">
                <img src={linkedInLogo} alt="LinkedIn Logo" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="landing-tiles-container">
        <div className="landing-past-title">Past Articles:</div>
      </div>
      <div className="landing-tiles-container">
        <Link to='/about'>
          <div className="landing-tile">
            <div className="landing-tile-text">About Me</div>
          </div>
        </Link>
        <Link to='/experience'>
        <div className="landing-tile">
          <div className="landing-tile-text">Professional Experience</div>
        </div>
        </Link>
        <Link to='/projects'>
        <div className="landing-tile">
          <div className="landing-tile-text">Personal Projects</div>
        </div>
        </Link>
        <Link to='/coursework'>
        <div className="landing-tile">
          <div className="landing-tile-text">Relevant Coursework</div>
        </div>
        </Link>
        <Link to='/leadership'>
        <div className="landing-tile">
          <div className="landing-tile-text">Leadership</div>
        </div>
        </Link>
        <Link to='/awards'>
        <div className="landing-tile">
          <div className="landing-tile-text">Awards</div>
        </div>
        </Link>
      </div>
      <div className="landing-top-container">
        <div className="landing-top-content">
          <div className="landing-bottom-text">If you would like to learn more about me and my work, feel free to contact me directly or continue to explore this site.</div>
        </div>
      </div>
    </div>
    </div>
  );
};
  
export default Profile;