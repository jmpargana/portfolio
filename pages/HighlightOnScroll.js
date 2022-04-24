import useElementOnScreen from '../hooks/useElementOnScreen'

export default function HighlightOnScroll() {
  const opts = { root: null, rootMargin: '-450px', threshold: 1 }
  const [ref1, isVisible1] = useElementOnScreen(opts)
  const [ref2, isVisible2] = useElementOnScreen(opts)
  const [ref3, isVisible3] = useElementOnScreen(opts)

  return (
    <div className="centered-fullscreen">
      <div className="text-blocks">
        <h1 ref={ref1} className={`text-block ${isVisible1 ? "text-block-visible" : ''}`} >First</h1>
        <h1 ref={ref2} className={`text-block ${isVisible2 ? "text-block-visible" : ''}`} >Second</h1>
        <h1 ref={ref3} className={`text-block ${isVisible3 ? "text-block-visible" : ''}`} >Third</h1>
      </div>
    </div>
  )
}
