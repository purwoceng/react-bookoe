// StarRating.js
import React from "react";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: 4 }, (_, index) => {
    if (index < filledStars) {
      return (
        <span key={index} className="text-yellow-400">
          ⭐
        </span>
      );
    } else if (hasHalfStar && index === filledStars) {
      return <span key={index} className="text-yellow-400"></span>;
    } else {
      return (
        <span key={index} className="text-gray-300">
          🌟
        </span>
      );
    }
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;
