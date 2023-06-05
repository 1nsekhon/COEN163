import React, {useState, useEffect} from "react";

function Help() {
    const [activeIndex, setActiveIndex] = useState(null);   

    useEffect(() => {
        console.log('state:', activeIndex);
    }, [activeIndex])

    const items = [
        {
            Q: "What are the features in the extension and how do I use them?",
            A: "The extension includes sliders to adjust your reading/writing and visual preferences. The auditory option can be switched on or off. The dictionary button lists the top 10 most complicated words from the article and their definitions. The re-format button re-arranges the content in the article according to your preferred learning style settings."
        },
        {
            Q: "How is the breakdown of my learning styles calculated?",
            A: "For the quiz questions, each of the three answer choices corresponds to one of the three learning styles. Based on your answers, a percentage for each learning style is calculated and displayed to the user in the pie chart in the extension. You can adjust those suggestions as you see fit."
        },
        {
            Q: "How will LearnLayout benefit me?",
            A: "LearnLayout re-formats articles to present content in your most optimal learning style breakdown. This allows you understand complicated and long articles more efficiently and saves you time."
        },
        {
            Q: "Can I use LearnLayout on Firefox?",
            A: "LearnLayout is optimized for a range of modern web browsers, but unfortunately, Safari is not supported at this time. We recommend using alternative browsers such as Google Chrome and Safari to access LearnLayout and fully enjoy its features and functionalities."
        },
        {
            Q: "Is it free to use?",
            A: "LearnLayout is optimized for a range of modern web browsers, but unfortunately, Safari is not supported at this time. We recommend using alternative browsers such as Google Chrome and Safari to access LearnLayout and fully enjoy its features and functionalities."
        },
        {
            Q: "Can I use LearnLayout on PDFs?",
            A: "Unfortunately, out platform does not support this yet. Our team is continually working to enhance and expand the capabilities of LearnLayout, and we appreciate your understanding as we work towards adding PDF support in the future. We value your feedback and will take your request into consideration for upcoming updates."
        },
    ];

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
  
  return (
    <div className="landing-content-area">
    <div className="base-border">
      <div className="landing-top-container">
        <div className="landing-middle-content">
            <div className="landing-bottom-text">
                <h1>Frequently Asked Questions:</h1>
                <h2>Further documentation can be found at our website (learnlayoutextension.com).
Contact us at help@learnlayoutextension.com with additional questions or feedback.</h2>
                    <div className="accordion">
                        {items.map((item, index) => (
                            <div key={index} className="accordion-item">
                                <div className={`accordion-header ${index === activeIndex ? 'active' : ''}`} onClick={() => handleItemClick(index)}>
                                    {item.Q}
                                </div>
                                <div className={`accordion-content ${index === activeIndex ? 'active' : ''}`}>
                                    {item.A}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
      </div>
      </div>
      <div className="landing-top-container">
        <div className="landing-top-content">
          <div className="landing-bottom-text">If you would like to learn more about learn layout, feel free to contact help@learnlayout.com directly or continue to explore this site.</div>
        </div>
      </div>
    </div>
  );
};
  
export default Help;