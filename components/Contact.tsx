'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for reaching out! Jason will contact you soon to schedule your first session.')
  }

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>
          Ready to Find <span className="highlight">Your Game?</span>
        </h2>
        <p className={styles.intro}>
          Take the first step. Book your initial consultation and let&apos;s discover your unique tennis path together.
        </p>

        <div className={`${styles.info} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.infoItem}>
            <h3>📍 Location</h3>
            <p>Near Irvine Spectrum Center, CA</p>
          </div>
          <div className={styles.infoItem}>
            <h3>📞 Phone</h3>
            <p><a href="tel:+1234567890">(123) 456-7890</a></p>
          </div>
          <div className={styles.infoItem}>
            <h3>✉️ Email</h3>
            <p><a href="mailto:jason@courtandcraft.com">jason@courtandcraft.com</a></p>
          </div>
        </div>

        <form className={`${styles.form} ${isVisible ? styles.visible : ''}`} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone (Optional)</label>
            <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Tell Jason About Yourself</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your background, goals, tennis experience..." 
              required 
            />
          </div>
          <button type="submit" className={styles.btn}>Send Inquiry</button>
        </form>
      </div>
    </section>
  )
}