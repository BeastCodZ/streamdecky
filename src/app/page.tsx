"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";

interface ButtonData {
  name: string;
  path: string;
  args: string;
  icon: string;
}

const Home: React.FC = () => {
  const [buttonData, setButtonData] = useState<ButtonData[]>([]);

  useEffect(() => {
    fetch("/settings.json")
      .then((response) => response.json())
      .then((data) => setButtonData(data))
      .catch((error) => console.error("Error fetching settings:", error));
  }, []);

  const handleButtonClick = async (appName: string) => {
    try {
      const response = await fetch("/api/launch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ appName }),
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="deck">
      <h1 className="hero">StreamDeck</h1>
      <div className="row">
        {buttonData.map((item, index) => (
          <div
            key={index}
            className="buttonitems"
            onClick={() => handleButtonClick(item.name)}
          >
            <img src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
