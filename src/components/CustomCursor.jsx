import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest(
        "a, button, [data-cursor]"
      );

      setHovering(Boolean(interactiveElement));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? "cursor-active" : ""}`}
      style={{
        left: position.x,
        top: position.y
      }}
    />
  );
}

export default CustomCursor;
