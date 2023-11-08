import React from "react";
import "./IntroScreen.css";

const IntroScreen = () => {
  return (
    <div className="intro-screen">
      <h1 className="intro-heading">Welcome to Steady Sobriety</h1>
      <div className="content-wrapper">
        {" "}
        {/* This should be the flex container */}
        <img src="main_photo.jpg" alt="Main" className="main-photo" />
        <p className="intro-text">
          SteadySobriety is a web application designed to provide essential
          tools and support for individuals seeking to overcome alcohol abuse
          and maintain lasting sobriety. This platform offers a range of
          features that help users on their journey towards a healthier,
          alcohol-free life.
        </p>
      </div>
      <footer className="intro-footer">
        <p>Contact the Authors:</p>
        <p>Email: hu,yuqi@northeastern.edu</p>
        <p>Email: zhang,zhiq@northeastern.edu</p>
      </footer>
    </div>
  );
};

export default IntroScreen;
