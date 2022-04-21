import { useEffect, useState } from "react";

const ZOOM_SPEED = 0.1;

export default function Zoom() {
  const [zoom, setZoom] = useState(1);

  function onScroll(e) {
    let newSize;

    if (e.deltaY > 0) {
      newSize = zoom += ZOOM_SPEED;
      setZoom(newSize);
    } else {
      newSize = zoom -= ZOOM_SPEED;
      setZoom(newSize);
    }
  }

  useEffect(() => {
    document.body.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, []);

  return (
    <>
      <img
        style={{
          transform: `scale(${zoom})`,
          transition: "all 300ms ease-in-out",
          height: 1000,
          width: 1000,
          placeItems: 'center',
          position: 'absolute',
          display: 'grid',
          top: 0,
          left: 0,
        }}
        src="https://picsum.photos/1200/1200"
        alt=""
      />
      <div style={{ width: 1000, height: 1000 }}>Second layer comes here</div>
    </>
  );
}
