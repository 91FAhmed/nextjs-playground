"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const animateLoader = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + direction * 4;
        if (newPosition >= 100 || newPosition <= 0) {
          setDirection((prevDirection) => -prevDirection);
        }
        return newPosition < 0 ? 0 : newPosition > 100 ? 100 : newPosition;
      });
    };

    const timer = setInterval(animateLoader, 16);

    return () => clearInterval(timer);
  }, [direction]);

  return (
    <div className="flex justify-center items-center h-16">
      <div
        className="w-24 h-0.5 bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={position}
      >
        <div
          className="h-full w-1/3 bg-gray-800 rounded-full"
          style={{
            transform: `translateX(${position * 2}%)`,
            transition: "transform 0.016s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}
