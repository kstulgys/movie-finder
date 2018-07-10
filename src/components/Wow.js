import React from "react";
import PropTypes from "prop-types";

const Wow = ({ children, anim, offset, duration, delay, iteration }) => (
  <div
    className={`wow ${anim}`}
    data-wow-offset={offset}
    data-wow-duration={duration}
    data-wow-delay={delay}
    data-wow-iteration={iteration}
  >
    {children}
  </div>
);

Wow.propTypes = {
  anim: PropTypes.string,
  offset: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.string,
  iteration: PropTypes.string
};

Wow.defaultProps = {
  anim: "fadeInUp",
  offset: "0",
  duration: "3s",
  delay: "0s",
  iteration: "1"
};

export default Wow;
