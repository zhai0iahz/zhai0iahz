'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={`${styles.container} container`}>
        <div className={styles.imagePlaceholder}>
          <span>About Image: Jason portrait or action shot</span>
        </div>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2>Meet Jason</h2>
          <p>
            Jason is an educator, philosopher, and performer bringing a renaissance approach to tennis coaching. Located near Irvine Spectrum Center, he specializes in working with beginners and those from non-athletic backgrounds—academics, gamers, and anyone seeking to discover their unique tennis journey.
          </p>
          <p>
            Rather than forcing conventional methods, Jason meets students where they are. He believes tennis should be accessible, meaningful, and authentically yours.
          </p>
          <div className={styles.highlight}>
            &ldquo;I am an advocate for finding one&apos;s own tennis, no matter how unconventional.&rdquo;
          </div>
          <p>
            His teaching philosophy: <strong>Fuel the passion, Burn the waste, Save the lessons.</strong> Through gaming mechanics, psychological coaching, and genuine mentorship, Jason helps students move beyond fear and self-doubt to discover their authentic tennis potential.
          </p>
        </div>
      </div>
    </section>
  )
}