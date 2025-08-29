import React, { useState } from "react";
import "./Plan.scss";

const Plan = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <div className="Plans_container">
      <div className="Plan">
        <div className="Text">
          <div className="Text_left">
            <h1>Choose the plan that's right for you</h1>
            <p>
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className="Text_right">
            <div className="Buttons">
              <button
                className={monthly === false ? "active" : ""}
                onClick={() => setMonthly(false)}
              >
                Monthly
              </button>
              <button
                className={monthly === true ? "active" : ""}
                onClick={() => setMonthly(true)}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          monthly === false
            ? "Plans_boxes_monthly active"
            : "Plans_boxes_monthly"
        }
      >
        <div className="Plan_box">
          <h3>Basic Plan</h3>
          <p>
            Enjoy an extensive library of movies and shows, featuring a range of
            content, including recently released titles.
          </p>
          <div className="H2-p">
            <h2>$9.99</h2>
            <h6>/month</h6>
          </div>
          <div className="Btns">
            <button>Start Free Trial</button>
            <button>Choose Plan</button>
          </div>
        </div>
        <div className="Plan_box">
          <h3>Standard Plan</h3>
          <p>
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </p>
          <div className="H2-p">
            <h2>$12.99</h2>
            <h6>/month</h6>
          </div>
          <div className="Btns">
            <button>Start Free Trial</button>
            <button>Choose Plan</button>
          </div>
        </div>
        <div className="Plan_box">
          <h3>Premium Plan</h3>
          <p>
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </p>
          <div className="H2-p">
            <h2>$14.99</h2>
            <h6>/month</h6>
          </div>
          <div className="Btns">
            <button>Start Free Trial</button>
            <button>Choose Plan</button>
          </div>
        </div>
      </div>
      <div
        className={
          monthly === true ? "Plans_boxes_yearly active" : "Plans_boxes_yearly"
        }
      >
        <div className="Plan_box">
          <h3>Basic Plan</h3>
          <p>
            Enjoy an extensive library of movies and shows, featuring a range of
            content, including recently released titles.
          </p>
          <div className="H2-p">
            <h2>$90.99</h2>
            <h6>/year</h6>
          </div>
          <div className="Btns">
            <button>Start Free Trial</button>
            <button>Choose Plan</button>
          </div>
        </div>
        <div className="Plan_box">
          <h3>Standard Plan</h3>
          <p>
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </p>
          <div className="H2-p">
            <h2>$120.99</h2>
            <h6>/year</h6>
          </div>
          <div className="Btns">
            <button>Start Free Trial</button>
            <button>Choose Plan</button>
          </div>
        </div>
        <div className="Plan_box">
          <h3>Premium Plan</h3>
          <p>
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </p>
          <div className="H2-p">
            <h2>$140.99</h2>
            <h6>/year</h6>
          </div>
          <div className="Btns">
            <button>Start Free Trial</button>
            <button>Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
