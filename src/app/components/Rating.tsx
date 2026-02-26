// components/Rating.tsx
import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  max?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, max = 5 }) => {
  return (
    <div className="flex items-center gap-2">
        <h4>Sentiment Score:</h4>
      <div className="flex">
        {Array.from({ length: max }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={
              index < Math.round(rating)
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300"
            }
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default Rating;