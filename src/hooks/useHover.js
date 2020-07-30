import { useState, useEffect, useRef } from "react";

function useHover() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", onEnter);
    ref.current.addEventListener("mouseleave", onLeave);

    return () => {
      ref.current.removeEventListener("mouseenter", onEnter);
      ref.current.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  function onEnter() {
    console.log("Hovered");
    setHovered(true);
  }

  function onLeave() {
    console.log("Not Hovered");
    setHovered(false);
  }

  return [hovered, ref];
}

export default useHover;
