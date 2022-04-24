import { useRef, useEffect } from 'react'

export default function useHorizontallScroll() {
  const ref = useRef()


  useEffect(() => {
    function onWheel(e) {
      console.log('called', e.deltaY)
      if (e.deltaY == 0) return
      e.preventDefault()
      ref.current.scrollTo({
        left: ref.current.scrollLeft + e.deltaY,
        behavior: 'smooth'
      })
    }
    ref.current?.addEventListener("wheel", onWheel)
    return () => ref.current?.removeEventListener("wheel", onWheel)
  }, [])

  return ref
}
