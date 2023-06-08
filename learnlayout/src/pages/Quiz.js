import React from "react";
import appHome from "../assets/WasteAwayHome.png";
import appGame from "../assets/GarbageToss.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
        const [answers, setAnswers] = useState([]);
        const navigate = useNavigate();
      
        const handleAnswerChange = (questionIndex, answer) => {
          const newAnswers = [...answers];
          newAnswers[questionIndex] = answer;
          setAnswers(newAnswers);
        };
      
        const handleSubmit = (event) => {
            event.preventDefault();
            
            // Calculate learning style percentages based on answers
            const totalQuestions = 5;
            const answerCounts = {
              visual: 0,
              auditory: 0,
              readingWriting: 0
            };
          
            answers.forEach((answer) => {
              if (answer === 'a') {
                answerCounts.readingWriting++;
              } else if (answer === 'b') {
                answerCounts.auditory++;
              } else if (answer === 'c') {
                answerCounts.visual++;
              }
            });
          
            const percentages = {
              visual: (answerCounts.visual / totalQuestions) * 100,
              auditory: (answerCounts.auditory / totalQuestions) * 100,
              readingWriting: (answerCounts.readingWriting / totalQuestions) * 100
            };
          
            // Display results or navigate to results page
            console.log('Submit clicked');
            console.log('Answers:', answers);
            console.log('Learning Style Percentages:', percentages);

            navigate('/profile', { 
                state: {
                  readingRes: percentages.readingWriting,
                  visualRes: percentages.visual,
                  auditoryRes: percentages.auditory
                }
              });
              
          };

  return (
    <div className="landing-content-area">
      <div className="landing-top-container">
        <div className ="quizTitle">
        <h1>Learning Style Assesment</h1>
        <h3>Answer the five questions below to determine whether you have a visual, auditory, or reading/writing learning style.</h3>
        </div>
        <div className="quiz-middle-content">
            <div className="quiz-bottom-text">
                <div className="quizQuestion">
                    1. When learning a new concept, do you prefer to:
                </div>
                <div className="quizAnswer">
                    <label>
                        <input
                        type="radio"
                        name="question1"
                        value="a"
                        onChange={() => handleAnswerChange(0, 'a')}
                        />
                        (A) Read books or articles?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question1"
                        value="b"
                        onChange={() => handleAnswerChange(0, 'b')}
                        />
                        (B) Discuss it with others or listen to lectures?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question1"
                        value="c"
                        onChange={() => handleAnswerChange(0, 'c')}
                        />
                        (C) Use diagrams, charts, or visual aids?
                    </label>   
                </div>                 
                <div className="quizQuestion">
                    2. When remembering information, do you find it easier to:
                </div>
                <div className="quizAnswer">
                    <label>
                        <input
                        type="radio"
                        name="question2"
                        value="a"
                        onChange={() => handleAnswerChange(1, 'a')}
                        />
                        (A) Write notes or create written summaries?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question2"
                        value="b"
                        onChange={() => handleAnswerChange(1, 'b')}
                        />
                        (B) Recite or discuss the information out loud?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question2"
                        value="c"
                        onChange={() => handleAnswerChange(1, 'c')}
                        />
                        (C) Visualize images or diagrams in your mind?
                    </label>                    
                </div>
                <div className="quizQuestion">
                    3. When studying for an exam, do you tend to:
                </div>
                <div className="quizAnswer">
                    <label>
                        <input
                        type="radio"
                        name="question3"
                        value="a"
                        onChange={() => handleAnswerChange(2, 'a')}
                        />
                        (A) Read and highlight the textbook or study guide?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question3"
                        value="b"
                        onChange={() => handleAnswerChange(2, 'b')}
                        />
                        (B) Participate in study groups or explain concepts to others?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question3"
                        value="c"
                        onChange={() => handleAnswerChange(2, 'c')}
                        />
                        (C) Use flashcards, mind maps, or other visual study tools?
                    </label>                    
                </div>
                <div className="quizQuestion">
                    4. When solving a problem, do you prefer to:
                </div>
                <div className="quizAnswer">
                    <label>
                        <input
                        type="radio"
                        name="question4"
                        value="a"
                        onChange={() => handleAnswerChange(3, 'a')}
                        />
                        (A) Analyze and think through the steps silently in your head?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question4"
                        value="b"
                        onChange={() => handleAnswerChange(3, 'b')}
                        />
                        (B) Talk through the problem or discuss it with others?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question4"
                        value="c"
                        onChange={() => handleAnswerChange(3, 'c')}
                        />
                        (C) Sketch diagrams or use visual representations to understand it?
                    </label>                    
                </div>
                <div className="quizQuestion">
                    5. When recalling directions or locations, do you typically:
                </div>
                <div className="quizAnswer">
                    <label>
                        <input
                        type="radio"
                        name="question5"
                        value="a"
                        onChange={() => handleAnswerChange(4, 'a')}
                        />
                        (A) Visualize the route or landmarks in your mind?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question5"
                        value="b"
                        onChange={() => handleAnswerChange(4, 'b')}
                        />
                        (B) Repeat the directions out loud or listen to audio instructions?
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="question5"
                        value="c"
                        onChange={() => handleAnswerChange(4, 'c')}
                        />
                        (C) Read a map or written instructions carefully?
                    </label>                    
                </div>
            </div>
            <div className = "submitQuiz">
                <button onClick={handleSubmit} className="smContent">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};
  
export default Quiz;