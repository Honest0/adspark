"use client";
import React from "react";
import "../../public/styles/GetaroundButton.css";

const GetaroundButton = () => {
  return (
    <div className="getaround-container w-[254px]">
      {/* Main button */}
      <div className="getaround-button">
        <span className="getaround-text text-[14px]">Spark A Conversation with us</span>
      </div>

      {/* Tooltip content */}
      <div className="getaround-tooltip">
        <div className="getaround-icons">
          <div className="getaround-icon-btn python">
            <svg viewBox="0 0 24 24">
              <path
                fill="#3776AB"
                d="M12 0C7.58 0 4 3.58 4 8v4c0 4.42 3.58 8 8 8s8-3.58 8-8V8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </div>
          <div className="getaround-icon-btn chat">
            <svg viewBox="0 0 24 24">
              <path
                fill="#25D366"
                d="M12 2C6.48 2 2 6.02 2 10.5c0 2.13.97 4.07 2.62 5.56L2 22l6.22-2.5c1.24.36 2.54.55 3.78.55 5.52 0 10-4.02 10-8.5S17.52 2 12 2z"
              />
            </svg>
          </div>
          <div className="getaround-icon-btn like">
            <svg viewBox="0 0 24 24">
              <path
                fill="#FF4D4D"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 
                3.41.81 4.5 2.09C13.09 3.81 14.76 3 
                16.5 3 19.58 3 22 5.42 22 8.5c0 
                3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetaroundButton;
