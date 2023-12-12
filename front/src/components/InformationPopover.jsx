import React, { useEffect, useRef } from "react";
import "../styles/InformationPopover.css";
import PropTypes from "prop-types";

const InformationPopover = ({ content, onClose }) => {
  const popoverRef = useRef();

  // Event listener to close the popover when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose(); // Close the popover
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="information-popover" ref={popoverRef}>
      <div className="information-content">
        <h3>Instructions:</h3>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

InformationPopover.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose is a required function
  content: PropTypes.node.isRequired, // content can be any renderable elements
};

export default InformationPopover;
