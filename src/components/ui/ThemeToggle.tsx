"use client"
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  if (!mounted) return null
  return (
    <button aria-label="Toggle theme" onClick={toggle} className="rounded-xl px-3 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
      <span aria-hidden>🌓</span>
    </button>
  )
}

