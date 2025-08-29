import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Logout.scss";
import { Value } from "sass";

const Logout = () => {
  return (
    <div className="Logout">
      <div className="Img_Form">
        <div className="Img">
          <img src="images/Sub Container@2x.png" alt="" />
        </div>
        <div className="Form">
          <h1>Please login to use our app</h1>

          <div className="Email">
            <label>Email</label>
            <input type="email" placeholder="example@email.com" />
          </div>

          <div className="Password">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>

          <button type="submit">Login</button>
          <h4>Don't have an account?</h4>

          <div className="Btns">
            {/* Google */}
            <GoogleLogin className="btn"
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log("Google user: ", decoded);
              }}
              onError={() => {
                console.log("Google Login Failed");
              }}
            />

            {/* GitHub (alohida API kerak bo‘ladi) */}
            <button
              className="btn"
              onClick={() => {
                window.location.href =
                  "https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID";
              }}
            >
              <i className="fa-brands fa-github"></i> Вход через аккаунт GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
