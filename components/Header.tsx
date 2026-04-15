'use client'

import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Approach', href: '/#approach' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

function ScrollToSection() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [pathname, searchParams])

  return null
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <ScrollToSection />
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={`${styles.nav} container`}>
          <Link href="/" className={styles.logo}>
            Court & Craft
          </Link>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <ThemeToggle />
            <button 
              className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </nav>
      </header>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={styles.mobileNavLink}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {mobileOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}