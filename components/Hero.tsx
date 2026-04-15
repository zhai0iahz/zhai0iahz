'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <p className={styles.tagline}>Find Your Own Game</p>
        <h1 className={styles.title}>Precision Tennis Coaching for Every Player</h1>
        <p className={styles.subtitle}>
          Specialized instruction for beginners and unconventional learners. Jason combines philosophy, psychology, and proven coaching methods to unlock your potential.
        </p>
        <div className={styles.cta}>
          <Link href="/#contact" className={styles.btn}>Book Your First Session</Link>
          <Link href="/#about" className={styles.btnSecondary}>Learn More</Link>
        </div>
        <div className={styles.imagePlaceholder}>
          <span>Hero Image: Jason coaching on court with energy and focus</span>
        </div>
      </div>
    </section>
  )
}