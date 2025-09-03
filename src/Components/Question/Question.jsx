import React, { useState } from "react";
import "./Question.scss";

const Question = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);
  return (
    <div className="Question">
      <div className="Questions">
        <div className="Text">
          <div className="Text_left">
            <h1>Frequently Asked Questions</h1>
            <p>
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <div className="Text_right">
            <button>Ask a Question</button>
          </div>
        </div>
      </div>
      <div className="Question_boxes">
        <div className="Boxes-1">
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>01</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>What is StreamVibe?</h3>
                  <button>
                    <i
                      className={
                        question1 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion1(!question1)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question1 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>02</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>How much does StreamVibe cost?</h3>
                  <button>
                    <i
                      className={
                        question2 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion2(!question2)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question2 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>03</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>What content is available on StreamVibe?</h3>
                  <button>
                    <i
                      className={
                        question3 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion3(!question3)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question3 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>04</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>How can I watch StreamVibe?</h3>
                  <button>
                    <i
                      className={
                        question4 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion4(!question4)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question4 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
        </div>
        <div className="Boxes-2">
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>05</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>How do I sign up for StreamVibe?</h3>
                  <button>
                    <i
                      className={
                        question5 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion5(!question5)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question5 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>06</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>What is the StreamVibe free trial?</h3>
                  <button>
                    <i
                      className={
                        question6 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion6(!question6)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question6 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>07</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>How do I contact StreamVibe customer support?</h3>
                  <button>
                    <i
                      className={
                        question7 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion7(!question7)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question7 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
          <div className="Box">
            <div className="Box_linear">
              <div className="Box_left">
                <button>08</button>
              </div>
              <div className="Box_right">
                <div className="H3-button">
                  <h3>What are the StreamVibe payment methods?</h3>
                  <button>
                    <i
                      className={
                        question8 ? "fa-solid fa-minus" : "fa-solid fa-plus"
                      }
                      onClick={() => setQuestion8(!question8)}
                    ></i>
                    {/* <i class="fa-solid fa-minus"></i> */}
                  </button>
                </div>
                <p className={question8 ? "active" : ""}>
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
            </div>
            <div className="Accardion_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
