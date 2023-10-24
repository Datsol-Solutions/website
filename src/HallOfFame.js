import React from 'react';
import './HallOfFame.css'; // Import your CSS file for styling, replace 'logos.css' with your actual CSS file

// Assuming logos are in the same directory as LogosSection.js
import logo1 from './media/logosSection/180 DC.png';
import logo2 from './media/logosSection/Aissec.jpeg';
import logo3 from './media/logosSection/Arya Stays.jpeg';
import logo4 from './media/logosSection/BNY.png';
import logo5  from './media/logosSection/CDC.png';
import logo6  from './media/logosSection/Chi.jpeg';
import logo7 from './media/logosSection/CSIR.png';
import logo8 from './media/logosSection/DRDO.jpeg';
import logo9 from './media/logosSection/DSIJ.png';
import logo10 from './media/logosSection/Edmento.jpg';
import logo11 from './media/logosSection/Elixir.jpeg';
import logo12 from './media/logosSection/Evva Health.jpeg';
import logo13 from './media/logosSection/Forbes India.png';
import logo14 from './media/logosSection/Govt of India.png';
import logo15 from './media/logosSection/Grayquest.png';
import logo16 from './media/logosSection/GYWS.png';
import logo17 from './media/logosSection/IAI.jpeg';
import logo18 from './media/logosSection/Jenesys.jpeg';
import logo19 from './media/logosSection/KGP.png';
import logo20 from './media/logosSection/kpmg.png';
import logo21 from './media/logosSection/KTJ.png';
import logo22 from './media/logosSection/Mastercard.png';
import logo23 from './media/logosSection/MMF.png';
import logo24 from './media/logosSection/Neo Aid.png';
import logo25 from './media/logosSection/Nihilent.jpeg';
import logo26 from './media/logosSection/SIH.png';
import logo27 from './media/logosSection/SWG.jpeg';
import logo28 from './media/logosSection/Team Kart.png';
import logo29 from './media/logosSection/TSG.png';
import logo30 from './media/logosSection/TWMP.png';
import logo31 from './media/logosSection/University of Chulalongkorn.png';
import logo32 from './media/logosSection/Zeeve.png';
import logo33 from './media/logosSection/Zolve.png';

const logos = [
  logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,
  logo18,logo19,logo20,logo21,logo22,logo23,logo24,logo25,logo26,logo27,logo28,logo29,logo30,logo31,logo32,logo33,
];

const LogosSection = () => {
  // Distribute logos into three rows
  const logosRows = [
    logos.slice(0, 10),
    logos.slice(10, 23),
    logos.slice(23),
  ];

  return (
    <div className="logos-container">
      {logosRows.map((row, rowIndex) => (
        <div key={rowIndex} className="logo-row">
          {row.map((logo, logoIndex) => (
            <img key={logoIndex} src={logo} alt={`Logo ${logoIndex + 1}`} className="HallofFamelogo" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LogosSection;
