import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Court & Craft Tennis',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }}>
      <h1 style={{ fontSize: '120px', fontWeight: '800', color: 'var(--color-primary)', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '24px', color: 'var(--color-secondary)', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ 
        padding: '14px 32px', 
        background: 'var(--color-primary)', 
        color: '#FFFFFF', 
        textDecoration: 'none', 
        borderRadius: '8px',
        fontWeight: 600
      }}>Return Home</a>
    </div>
  )
}