import React from "react";
import "./Resources.css";

const Resources = () => {
  const resources = [
    {
      title: "10 Tools You Need In Your Sober Toolkit In Early Sobriety",
      link: "https://hellosomedaycoaching.com/10-tools-you-need-in-your-sober-toolkit/",
      image: "10tools.png",
      alt: "The episode discusses essential tools for sobriety, including technology, supportive media, satisfying snacks, sober treats, progress tracking apps, community support, a personal retreat space, physical activity, new routines, and sober coaching. Resources for further guidance on living alcohol-free are provided.",
    },
    {
      title: "How to Stop Drinking: 14 Tips for Success",
      link: "https://www.healthline.com/health/alcohol/how-to-stop-drinking",
      image: "14tips.jpg",
      alt: "To stop drinking alcohol, you first need to understand your relationship with drinking. From there, you may need social support, consistent self-care, and new routines that can help redirect your mind.",
    },
    {
      title: "11 ways to curb your drinking",
      link: "https://www.health.harvard.edu/staying-healthy/11-ways-to-curb-your-drinking",
      image: "11tips.jpg",
      alt: "To control alcohol consumption, consult a doctor and consider cutting back with strategies like setting drinking goals, tracking consumption, removing alcohol from the home, and engaging in alternative activities. Support from friends, family, and professionals is crucial, along with persistence despite setbacks.",
    },
  ];

  return (
    <div className="resources">
      <h2>Additional Tools and Resources</h2>
      <div className="resource-cards-container">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-image">
              <img src={resource.image} alt={resource.title} />
            </div>
            <div className="resource-content">
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
