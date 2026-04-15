'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Services.module.css'

const services = [
  {
    icon: '🎾',
    title: 'Private Lessons',
    description: 'One-on-one coaching tailored to your learning style, goals, and personality. Available in 60-minute or 90-minute sessions.',
    price: '$80–$140',
  },
  {
    icon: '🤖',
    title: 'Ball Machine Training',
    description: 'Precision-based drills using advanced ball machines to develop consistency, timing, and footwork.',
    price: 'Included in lessons',
  },
  {
    icon: '🧠',
    title: 'Inner Game Coaching',
    description: 'Overcome mental barriers, build confidence, and master the psychological side of competitive tennis.',
    price: '$90–$120',
  },
  {
    icon: '🔧',
    title: 'Racquet Restringing',
    description: 'Professional restringing services to maintain optimal string tension, performance, and feel.',
    price: 'From $25',
  },
  {
    icon: '⚡',
    title: 'Equipment Customization',
    description: 'Custom grip adjustments, weight modifications, and personalized equipment setups for your game.',
    price: 'From $50',
  },
  {
    icon: '🤝',
    title: 'Community Matchmaking',
    description: 'Connect with fellow Court & Craft students for practice, friendly matches, and lasting connections.',
    price: 'Free for members',
  },
]

export default function Services() {
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
    <section className={styles.services} id="services" ref={ref}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} ${isVisible ? styles.visible : ''}`}>
          Our <span className="highlight">Services</span>
        </h2>
        
        <div className={styles.servicesWrapper}>
          <div className={styles.octagonDecor} aria-hidden="true">
            <svg viewBox="0 0 200 200" className={styles.octagonSvg}>
              <polygon points="100,10 180,50 180,150 100,190 20,150 20,50" />
            </svg>
          </div>
          
          <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceCard}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.priceTag}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}