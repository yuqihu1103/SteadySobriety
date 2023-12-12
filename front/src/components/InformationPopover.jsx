import React, { useState, useEffect, useRef } from "react";
import "../styles/InformationPopover.css";
import PropTypes from "prop-types";

const InformationPopover = ({ children }) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef();

  // Event listener to close the popover when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false); // Close the popover
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className="info-icon-button"
        onClick={() => setShowPopover(!showPopover)}
        aria-label="Info"
      >
        <img src="/information_icon.jpg" alt="Information icon" />
      </button>

      {showPopover && (
        <div className="information-popover" ref={popoverRef}>
          <div className="information-content">
            <h3>Instructions:</h3>
            {children} {/* Render the content passed as children */}
            <button onClick={() => setShowPopover(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

InformationPopover.propTypes = {
  children: PropTypes.node.isRequired, // children is now expected to be a React node
};

export default InformationPopover;
