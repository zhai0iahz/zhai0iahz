import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.column}>
          <h3>About Court & Craft</h3>
          <p>We teach tennis for unconventional learners through philosophy, psychology, gaming mechanics, and authentic mentorship. Find your own game.</p>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <a href="#about">About Jason</a>
          <a href="#services">Services</a>
          <a href="#approach">Our Philosophy</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.column}>
          <h3>Connect With Us</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} title="Instagram" aria-label="Instagram">IG</a>
            <a href="#" className={styles.socialIcon} title="Facebook" aria-label="Facebook">FB</a>
            <a href="#" className={styles.socialIcon} title="Twitter" aria-label="Twitter">X</a>
            <a href="#" className={styles.socialIcon} title="LinkedIn" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Court & Craft Tennis. All rights reserved. Find Your Own Game.</p>
      </div>
    </footer>
  )
}