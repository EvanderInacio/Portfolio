import Link from 'next/link'
import { ArrowUp } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { Scroll } from './styles'

export function ScrollTop() {
  const [up, setUp] = useState()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setUp(true)
      } else {
        setUp(false)
      }
    })
  }, [])

  const handleScroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {up && (
        <Scroll>
          <Link href={'/'} onClick={handleScroll}>
            <ArrowUp weight='bold' />
          </Link>
        </Scroll>
      )}
    </>
  )
}
