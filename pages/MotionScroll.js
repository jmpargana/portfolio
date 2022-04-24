import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

export default function MotionScroll() {
  // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move(), Sticky());
        // <Animator animation={FadeUp}>
        //   <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
        // </Animator>
        // <Animator animation={ZoomInScrollOut}>
        //   <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
        // </Animator>

    if (typeof window === "undefined") {
      return <div />
    }

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }}>
            Let me show you scroll animation 😀
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>Done</span>
          <br />
          <span style={{ fontSize: "30px" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}
