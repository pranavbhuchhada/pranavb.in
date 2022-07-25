import React from 'react'
import Typed from 'typed.js'
import Twemoji from './Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
      // shuffle: true,
    }
    typed.current = new Typed(el.current, options)
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I make my living performing Vulnerability scan and Penetration testing.</li>
        <li>I work mostly with Node, AWS, Python.</li>
        <li>I'm a Researcher, Learner and Freedom seeker.</li>
        <li>My first programming language I learned was <b className="font-medium">C</b>.</li>
        <li>I'm a sport-guy. I love <span className="ml-1"><Twemoji emoji="soccer-ball" />,<Twemoji emoji="ping-pong" /></span>.</li>
        <li>I love to travel and explore New places.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
