import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import linkedIn from "../assets/linkedin_profile.png";
import edit_profile from "../assets/edit_profile.png";
import pastIcon from "../assets/pastIcon.png"
import { useLocation } from 'react-router-dom';


const Profile = () => {
  const location = useLocation();
  const { readingRes, visualRes, auditoryRes } = location.state;

  console.log(readingRes);
  console.log(visualRes);
  console.log(auditoryRes);
  
  const [visual, setVisual] = useState(visualRes || ""); 
  const [reading, setReading] = useState(readingRes || ""); 
  const [auditory, setAuditory] = useState(auditoryRes || "");
    const [username, setUsername] = useState("LUCAS VORON");
    const [email, setEmail] = useState("lvoron@scu.edu");
  

  useEffect(() => {
    console.log("visual has changed:", visual);
    console.log("reading/writing has changed:", reading);
    console.log("auditory has changed:", auditory);
    console.log("username has changed:", username);
    console.log("email  has changed:", email);

    // handleSubmit();
    // console.log("that has been called");
  }, [visual, reading, auditory, username, email]);

  return (
    <div>
    <div className="landing-content-area">
      <div className="landing-top-container">
        <div className="landing-left">
          <div className="landing-left-container">
            <div className="landing-top-content">
              <div className="landing-name-title">{username}</div>
              <div className="landing-subtitle">{email}
                <div className="edit-icon-container">
                  <img src={edit_profile} className="edit-icon" alt="Edit Profile" />
                </div>
              </div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Visual: {visual}%
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="60"
                    className="slider"
                    id="myRange"
                    step="1"
                    onChange={(event) => setVisual(event.target.value)}
                  ></input>
                </div>
              </div>
              <div className="landing-top-text">What We Recommend:<br></br>
                - heavily using charts, graphs, and pictures when learning new content <br></br>
                - highlighting key points and terms <br></br>
                - write to-do lists <br></br>
                - in the classroom, make a conscious effort to see the lecturer </div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Reading: {reading}%
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="25"
                      className="slider"
                      id="myRange"
                      step="1"
                      onChange={(event) => setReading(event.target.value)}
                    ></input>
                  </div>
                </div>
              <div className="landing-top-text">For your learning style, we recommend using a combination or reading and visual learning styles to get the most out of material. Based on your information, our analytics recommend reading content and taking breaks in between to visually draw out what you understand.</div>
            </div>
            <div className="landing-bottom-content">
                <div className="landing-top-title">Auditory: {auditory}%
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="15"
                      className="slider"
                      id="myRange"
                      step="1"
                      onChange={(event) => setAuditory(event.target.value)}
                    ></input>
                  </div>
                </div>
              <div className="landing-top-text">This is the most popular learning style. Because you rank this so low based on your quiz results, we recommend to always use this in conjunction with another technique. For example, taking notes in a lecture or drawing out what you recall visually afterwards. </div>
            </div>
          </div>
        </div>
        <div className="landing-right">
          <Link to='https://www.linkedin.com/in/lucasvoron/'>
            <div className="landing-top-image-container">
              <img src={linkedIn} className="landing-image" alt="waste graphic 3" />
              <div className="linkedin-logo">
                <img src={edit_profile} alt="Edit Profile" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="landing-middle-container">
        <div className="landing-past-title">Past Articles:</div>
        <img src={pastIcon} alt="rewind icon" className="past-icon"></img>
      </div>
      <div className="landing-tiles-container">
        <Link to='https://www.cnn.com/'>
          <div className="landing-tile">
            <div className="landing-tile-text">CNN</div>
          </div>
        </Link>
        <Link to='https://www.msnbc.com/'>
        <div className="landing-tile">
          <div className="landing-tile-text">MSNBC</div>
        </div>
        </Link>
        <Link to='https://www.washingtonpost.com/'>
        <div className="landing-tile">
          <div className="landing-tile-text">Washington Post</div>
        </div>
        </Link>
        <Link to='https://www.nytimes.com/'>
        <div className="landing-tile">
          <div className="landing-tile-text">New York Times</div>
        </div>
        </Link>
        <Link to='https://www.wsj.com/'>
        <div className="landing-tile">
          <div className="landing-tile-text">Wall Street Journal</div>
        </div>
        </Link>
        <Link to='https://www.theguardian.com/us'>
        <div className="landing-tile">
          <div className="landing-tile-text">The Guardian</div>
        </div>
        </Link>
      </div>
      <div className="landing-top-container">
        <div className="landing-top-content">
          <div className="landing-bottom-text">If you would like to learn more about learn layout, feel free to contact help@learnlayout.com directly or continue to explore this site.</div>
        </div>
      </div>
    </div>
    </div>
  );
};
  
export default Profile;