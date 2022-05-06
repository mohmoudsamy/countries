import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loader">
        <div className="spinner-light"></div>
        <div className="spinner-dark"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
