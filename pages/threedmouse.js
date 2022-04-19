import { useState, useEffect } from "react";

export default function ThreeDMouse() {
  const [offsetX, setOffsetX] = useState("");
  const [offsetY, setOffsetY] = useState("");
  const friction = 1 / 32


  useEffect(() => {
    document.body.addEventListener('mousemove', _mouseMove)
    return () => {
      window.removeEventListener('mousemove', _mouseMove)
    }
  }, [])


  function _mouseMove(e) {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;

    setOffsetX(x)
    setOffsetY(y)
  }

  const offset = {
    transform: `translate(-50%, -50%) perspective(600px)
                rotateY(${offsetX}deg)
                rotateX(${offsetY}deg)`,
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className="wrapper" style={offset}>
        <div className="shape"></div>
        <div className="shape2"></div>
      </div>
    </div>
  );
}
