"use client"

import React from 'react';

import './globals.css'

function ButtonItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="buttonitems">
      <img src={src} alt={alt} />
    </div>
  );
}

export default function Home() {
  const buttonData = [
    { src: "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png", alt: "Valorant Icon" },
    { src: "https://www.freepnglogos.com/uploads/gta-5-logo-png/grand-theft-auto-v-1.png", alt: "GTA V Icon" },
    { src: '/add.png', alt: "Custom Icon 1" },
    
  ];

  return (
    <div className="deck">
      <h1 className="hero">StreamDeck</h1>
      <div className="row">
        {buttonData.map((item, index) => (
          <ButtonItem key={index} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
}
