'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'What should I wear to my first lesson?',
    answer: 'Wear comfortable athletic clothes and tennis shoes if you have them. If not, any non-marking athletic shoes will work. Bring a water bottle and your enthusiasm!',
  },
  {
    question: 'Do I need to have any tennis experience?',
    answer: "Not at all! In fact, most of Jason's students are complete beginners. He specializes in working with people from non-athletic backgrounds who never thought they could play tennis.",
  },
  {
    question: 'What equipment do I need to get started?',
    answer: 'Jason can provide loaner racquets for your first few lessons. As you progress, he\'ll help you select a racquet that suits your body type, playing style, and budget.',
  },
  {
    question: 'How long until I can play a real match?',
    answer: 'Everyone progresses differently, but most students feel comfortable playing friendly points after 4-6 lessons. The focus is on building confidence and having fun first.',
  },
  {
    question: "What if I'm nervous or have anxiety about learning?",
    answer: "You're in the right place! Jason's \"Inner Game\" coaching is specifically designed to help people overcome mental barriers. Many students who were terrified of tennis have become confident players.",
  },
  {
    question: 'Are there discounts for multiple lessons per week?',
    answer: "Yes! Jason offers special pricing for students who commit to multiple sessions per week. He also occasionally offers new student trial sessions at discounted rates.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
    <section className={styles.faq} id="faq" ref={ref}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={`${styles.list} ${isVisible ? styles.visible : ''}`}>
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={styles.item}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <button 
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}