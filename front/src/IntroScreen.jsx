import React from "react";
import "./IntroScreen.css";

const IntroScreen = () => {
  return (
    <div className="intro-screen">
      <header className="intro-header">
        <h1>Welcome to Steady Sobriety</h1>
        <img src="/path-to-main-photo.jpg" alt="Main" className="main-photo" />
        <p className="intro-text">
          SteadySobriety is a web application designed to provide essential
          tools and support for individuals seeking to overcome alcohol abuse
          and maintain lasting sobriety. This platform offers a range of
          features that help users on their journey towards a healthier,
          alcohol-free life.
        </p>
      </header>
      <footer className="intro-footer">
        <p>Contact the Authors:</p>
        <p>Email: hu,yuqi@northeastern.edu</p>
        <p>Email: zhang,zhiq@northeastern.edu</p>
      </footer>
    </div>
  );
};

export default IntroScreen;
