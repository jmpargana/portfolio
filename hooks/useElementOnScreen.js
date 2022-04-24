import { useRef, useState, useEffect } from 'react'

export default function useElementOnScreen(opts) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  function callback(entries) {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, opts)
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, opts])

  return [ref, isVisible]
}
