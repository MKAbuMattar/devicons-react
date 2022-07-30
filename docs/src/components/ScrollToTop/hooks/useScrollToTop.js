import { useEffect, useState } from 'react'

const useScrollToTop = (top) => {
  const [visible, setVisible] = useState(false)

  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    // Remove listener on unmount
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return { visible }
}

export default useScrollToTop
