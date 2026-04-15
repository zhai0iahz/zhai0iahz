'use client'

import { useState } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      background: 'var(--color-background)',
    }}>
      <h2 style={{ fontSize: '24px', color: 'var(--color-secondary)', marginBottom: '20px' }}>
        Something went wrong
      </h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px', maxWidth: '400px' }}>
        {error.message || 'An unexpected error occurred. Please try refreshing the page.'}
      </p>
      <button
        onClick={reset}
        style={{
          padding: '14px 32px',
          background: 'var(--color-primary)',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Try again
      </button>
    </div>
  )
}