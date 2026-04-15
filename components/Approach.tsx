'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Approach.module.css'

const philosophies = [
  {
    title: 'Gaming Mechanics',
    description: 'We explain tennis through frameworks you already understand—game theory, progression systems, strategic thinking. Makes learning intuitive and engaging.',
  },
  {
    title: 'Your Unique Style',
    description: "Tennis isn't one-size-fits-all. We help you discover your natural playing style and develop it with authenticity and confidence.",
  },
  {
    title: 'Psychology-First',
    description: 'Technical skills matter, but mindset is everything. We address fear, doubt, and performance anxiety head-on through proven psychological methods.',
  },
  {
    title: 'Beginner-Friendly',
    description: 'No athletic background? No problem. We specialize in bringing unconventional learners into the game with joy, confidence, and respect.',
  },
  {
    title: 'Mentorship Model',
    description: "Jason is more than a coach—he's an educator and mentor invested in your growth as a player and person.",
  },
  {
    title: 'Sustainable Growth',
    description: 'Fuel your passion, burn away bad habits, and save the lessons learned. We build for long-term love of the game.',
  },
]

export default function Approach() {
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
    <section className={styles.approach} id="approach" ref={ref}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>
          The <span className="highlight">Court & Craft</span> Philosophy
        </h2>
        <p className={styles.intro}>
          We believe great coaching is personalized, inclusive, and transformative. Here&apos;s what sets us apart:
        </p>
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {philosophies.map((item, index) => (
            <div 
              key={index} 
              className={styles.item}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}