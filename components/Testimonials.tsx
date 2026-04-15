'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: "I was terrified of tennis and worried I was too old to start. After just one lesson with Jason, that fear completely disappeared. I felt genuinely encouraged and can't wait for my next session.",
    author: 'Sarah M.',
    role: 'Academic, beginner player',
  },
  {
    text: "As a lifelong gamer, Jason's gaming mechanics approach made everything click. I finally understand tennis strategy and I'm improving way faster than I expected.",
    author: 'Alex T.',
    role: 'Software engineer, gamer',
  },
  {
    text: "The inner game coaching changed everything. Jason helped me overcome my mental blocks, and that transformation carried into my business and personal life. Highly recommend.",
    author: 'Jordan P.',
    role: 'Business professional',
  },
]

export default function Testimonials() {
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
    <section className={styles.testimonials} id="testimonials" ref={ref}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>What Our Players Say</h2>
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.author}>{item.author}</div>
              <div className={styles.role}>{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}