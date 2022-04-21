import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function RoundDiv() {
  return (
    <Parallax pages={2} style={{ top: "0", left: "0"}}>
      <ParallaxLayer
        offset={0}
        speed={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10
        }}
      >
        <h1 style={{ color: 'white', fontSize: '12rem', position: 'absolute', top: 100, left: 100 }}>Joao Pargana</h1>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={2}
        style={{ backgroundImage: "url(background-layer.svg)", backgroundPosition: 'center', backgroundSize: 'cover' }}
      />

      <ParallaxLayer
        offset={0.9}
        speed={3}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: 'column',
          alignItems: "center",
        }}
      >
        <h2>About</h2>
        <p>João Pargana is both artist and scientist. His broad range of interests and skills manifest in his
work as a web developer. Sensibility in the aesthetics of design and precision in the engineering
of reliable tools, combine in a highly communicative UI experience.</p>
      </ParallaxLayer>
    </Parallax>
  );
}
