import HorizontalScroll from 'react-scroll-horizontal'


export default function VerticalScroll() {
  return (
    <HorizontalScroll style={{ height: '100vw' }} reverseScroll config={{  }}>
      <div style={{ height: '100vh', width: '80vw', backgroundColor: 'red' }} />
      <div style={{ height: '100vh', width: '80vw', backgroundColor: 'blue' }} />
      <div style={{ height: '100vh', width: '80vw', backgroundColor: 'yellow' }} />
    </HorizontalScroll>
  );
}
