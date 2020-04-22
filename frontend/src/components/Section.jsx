import React from "react";
/* --- Component --- */
const Section = ({ children }) => {
  return (
    <div className="section">
      <div className="container">{children}</div>
    </div>
  );
};
export default Section;
