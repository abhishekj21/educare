import React from "react";
import "./Title.css";

// SubTitles and title are props
const Title = ({ subTitles, title }) => {
  return (
    <div className="title">
      <p>{subTitles} </p>
      <h2>{title} </h2>
    </div>
  );
};

export default Title;
