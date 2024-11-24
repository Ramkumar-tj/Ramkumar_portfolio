import React, { useEffect, useState } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full transition-all duration-300 ease-out opacity-60 scale-150"
      style={{
        width: "50rem",
        height: "50rem",
        transform: `translate(${position.x - 240}px, ${position.y - 240}px)`,
        background: `radial-gradient(circle, 
          rgba(19, 78, 74, 0.5) 0%, 
          rgba(19, 78, 74, 0.2) 50%, 
          rgba(15, 23, 42, 0) 70%)`, 
        mixBlendMode: "screen", 
      }}
    ></div>
  );
};

export default CursorEffect;
