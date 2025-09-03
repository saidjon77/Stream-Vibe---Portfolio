import React from "react";
import "./Support.scss";

const Support = () => {
  return (
    <div className="Support">
      <div className="Text_img">
        <h1>Welcome to our support page!</h1>
        <p>
          We're here to help you with any problems you may be having with our
          product.
        </p>
        <img src="images/Sub Container@2x.png" alt="" />
      </div>
      <div className="Form">
        <div className="FirstName_LastName">
          <div className="FirstName">
            <label htmlFor="first">First Name</label>
            <input type="text" placeholder="Enter First Name" name="first" />
          </div>
          <div className="LastName">
            <label htmlFor="last">Last Name</label>
            <input type="text" placeholder="Enter Last Name" name="last" />
          </div>
        </div>
        <div className="Email_Number">
          <div className="Email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your Email" name="email" />
          </div>
          <div className="Number">
            <label htmlFor="number">Phone Number</label>
            <input type="text" value={`+998 `} name="number" />
          </div>
        </div>
        <div className="Massege">
          <label htmlFor="massege">Massege</label>
          <input type="text" placeholder="Enter your massege" name="massege" />
        </div>
        <div className="Check_button">
          <div className="Check">
            <input type="checkbox" className="custom-checkbox" />
            <label>I agree with Terms of Use and Privacy Policy</label>
          </div>
          <div className="Button">
            <button type="submit">Send Massege</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
