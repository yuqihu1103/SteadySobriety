import React from "react";
import "../styles/Resources.css";

const Resources = () => {
  const resources1 = [
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

  const resources2 = [
    {
      title: "Best Programs to Quit Drinking ",
      link: "https://www.verywellmind.com/best-ways-to-quit-drinking-5080571",
      image: "quit_programs.jpg",
      alt: "If you're looking for the best programs to quit drinking, the method you choose will depend largely on your personal circumstances and the health benefits you seek. Options include self-help programs, online therapy, medication-assisted treatments, in-person therapy, counseling organizations, and support groups.",
    },
    {
      title: "NIH's Support strategies for quitting",
      link: "https://www.rethinkingdrinking.niaaa.nih.gov/Thinking-about-a-change/Support-for-quitting/Support-Strategies-For-Quitting.aspx",
      image: "quit_support.png",
      alt: "If you think you might have alcohol use disorder (AUD) and decide to stop drinking completely, don't go it alone. Evidence-based treatment approaches (medications, behavioral therapy, and mutual-support groups) are available to help people stop drinking.",
    },
    {
      title: "How To Stop Drinking Alcohol: A Complete Guid",
      link: "https://riahealth.com/alcohol/stop-drinking/",
      image: "quit_guide.webp",
      alt: "The trouble is that quitting is rarely easy, and the best solution isn't always clear. In fact, less than eight percent of those addicted to alcohol get help each year. This doesn’t need to be the case. There are now several evidence-based solutions for alcohol addiction—and one of them is bound to work for you.",
    },
  ];

  return (
    <div className="resources">
      <h1 className="resource-title">Additional Tools and Resources</h1>
      <div className="resource-cards-container">
        {resources1.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-image">
              <img src={resource.image} alt={resource.title} />
            </div>
            <div className="resource-content">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-title-link"
              >
                <h2 className="resource-title">{resource.title}</h2>
              </a>
              <p className="resource-description">{resource.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="resource-cards-container">
        {resources2.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-image">
              <img src={resource.image} alt={resource.title} />
            </div>
            <div className="resource-content">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-title-link"
              >
                <h2 className="resource-title">{resource.title}</h2>
              </a>
              <p className="resource-description">{resource.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
