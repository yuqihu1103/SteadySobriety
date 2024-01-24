import React from "react";
import "../styles/IntroScreen.css";

const IntroScreen = () => {
  return (
    <div className="intro-screen">
      <div className="intro-heading-container ">
        <h1 className="intro-heading">Welcome to Steady Sobriety</h1>
      </div>
      <div className="content-wrapper">
        {" "}
        {/* This should be the flex container */}
        <div className="row intro-content">
          <div className="col-lg-6 col-12">
            <img
              src="/main_photo.jpg"
              alt="Main photo kick alcohol away"
              className="main-photo img-fluid"
            />
          </div>
          <div className="col-lg-6 col-12">
            <p className="intro-text">
              SteadySobriety is a web application designed to provide essential
              tools and support for individuals seeking to overcome alcohol
              abuse and maintain lasting sobriety. After registering or logging
              in with existing credential, you can log you drinking days, view
              drinking history and current sober streak. Stay sober longer for a
              chance to be on the leaderboard!
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <p>Contact the Authors:</p>
        <p>Email: hu.yuqi@northeastern.edu</p>
        <p>Email: zhang.zhiqi@northeastern.edu</p>
      </div>
    </div>
  );
};

export default IntroScreen;
