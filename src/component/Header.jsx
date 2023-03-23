import React from "react";
import PropTypes from "prop-types"; // used for type casting props

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: "rgb(102, 51, 153)",
    color: "#ffffff",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Customer - Feedback</h2>
      </div>
    </header>
  );
}

// default props if user does not specify
Header.defaultProps = {
  text: "Customer Feedback",
  bgColor: "rgb(102, 51, 153)",
  textColor: "#ffffff",
};

// creating types for your properties
Header.propTypes = {
  text: "Customer Feedback",
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
