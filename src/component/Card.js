import React from "react";

function Card(props) {
  return (
    <div className="card" style={props.borderline}>
      <h4>{props.cardname}</h4>
      <p>{props.para}</p>
      <div className="icon">
        <img src={props.icon} />
      </div>
    </div>
  );
}

export default Card;
