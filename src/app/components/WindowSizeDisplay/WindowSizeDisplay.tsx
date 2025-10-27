"use client";
import React from "react";
import useWindowSize from "../../hooks/test"; // שימי לב לנתיב הנכון

function WindowSizeDisplay() {
  const { width, height } = useWindowSize();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h2>📏 הצגת גודל החלון</h2>
      <p>
        רוחב: <strong>{width}</strong> px
      </p>
      <p>
        גובה: <strong>{height}</strong> px
      </p>
    </div>
  );
}

export default WindowSizeDisplay;
