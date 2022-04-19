import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ScrollingImage() {
  return (
    <Parallax pages={1.1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0.02}
        speed={1.5}
        style={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          placeItems: "center",
          zIndex: '20'
        }}
      >
        <div style={{ height: '500px', width: '500px', background: 'transparent', border: '100px solid white', boxSizing: 'content-box' }}></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img src="https://picsum.photos/600/600" alt="" />
      </ParallaxLayer>
    </Parallax>
  );
}
