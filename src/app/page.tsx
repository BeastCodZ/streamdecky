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
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  const adjustGridLayout = () => {
    const container = document.querySelector('.row') as HTMLElement;
    if (!container) return;

    const items = container.children;
    const totalItems = items.length;
    let rows: number;
    console.log(totalItems)
    if (totalItems < 5 ) {
      rows = totalItems;
    } else if (totalItems === 5) {
      rows = 5;
    } else if (totalItems === 3 || totalItems == 6) {
      rows = 3;
    } else if (totalItems === 7 || totalItems == 8) {
      rows = 4;
    } else {
      rows = 5;
    }

    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  };

  useEffect(() => {
    const fetchButtonData = async () => {
      try {
        const response = await fetch("/settings.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setButtonData(data);
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchButtonData();

    window.addEventListener('resize', adjustGridLayout);

    return () => {
      window.removeEventListener('resize', adjustGridLayout);
    };
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      adjustGridLayout();
    }
  }, [isDataLoaded]);

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
      console.log(data);
    } catch (error) {
      console.error("Error launching application:", error);
    }
  };

  return (
    <div className="deck">
      <h1 className="hero">StreamDecky</h1>
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
