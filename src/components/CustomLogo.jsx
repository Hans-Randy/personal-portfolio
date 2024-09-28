import React from 'react';

const CustomLogo = () => {
    return (
      <a href="#home" className="ml-3 text-xl">
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Custom logo with initials"
        >
          {/* Hexagon shape */}
          <polygon
            points="50,5 95,30 95,70 50,95 5,70 5,30"
            fill="#4CAF50"
            stroke="#333"
            strokeWidth="2"
          />
          {/* Text (Initials) */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            HR
          </text>
        </svg>
      </a>
    );
  };

export default CustomLogo;
