import React, { useEffect, useRef } from "react";

export default function Typewriter() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const text = "And I Work With Computers";
  const typingSpeed = 80;
  const erasingSpeed = 50;
  const startDelay = 1000;
  const holdDelay = 2000;

  useEffect(() => {
    let timeout;
    let isMounted = true;

    const type = (i = 0) => {
      if (!isMounted) return;
      if (i <= text.length) {
        textRef.current.textContent = text.slice(0, i);
        timeout = setTimeout(() => type(i + 1), typingSpeed);
      } else {
        timeout = setTimeout(() => erase(text.length), holdDelay);
      }
    };

    const erase = (i) => {
      if (!isMounted) return;
      if (i >= 0) {
        textRef.current.textContent = text.slice(0, i);
        timeout = setTimeout(() => erase(i - 1), erasingSpeed);
      } else {
        timeout = setTimeout(() => type(0), startDelay);
      }
    };

    timeout = setTimeout(() => type(0), startDelay);

    // Blinking cursor
    let cursorBlink;
    if (cursorRef.current) {
      cursorBlink = setInterval(() => {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === "0" ? "1" : "0";
      }, 500);
    }

    return () => {
      isMounted = false;
      clearTimeout(timeout);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <h2 className="typewriter">
      <span ref={textRef} className="typewriter-text"></span>
      <span ref={cursorRef} className="typewriter-cursor">
        |
      </span>
    </h2>
  );
}
