import React from "react";
import "./style.css";

function Text(props) {
  return (
    <div className="text-section">
      <h3 className="lite">
        Reliable, efficient delivery <br /> <span>Powered by {props.name}</span>
      </h3>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
  );
}

export default Text;
