"use client"

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

type Toast = { id: number; text: string; tone?: 'success' | 'error' }
const ToastCtx = createContext<{ push: (t: Omit<Toast, 'id'>) => void } | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Toast[]>([])
  const push = useCallback((t: Omit<Toast, 'id'>) => {
    const id = Date.now()
    setItems((prev) => [...prev, { id, ...t }])
    setTimeout(() => setItems((prev) => prev.filter((x) => x.id !== id)), 3500)
  }, [])
  const value = useMemo(() => ({ push }), [push])
  return (
    <ToastCtx.Provider value={value}>
      {children}
      <div aria-live="polite" aria-atomic="true" className="fixed bottom-4 right-4 space-y-2 z-50">
        {items.map((t) => (
          <div key={t.id} className="px-4 py-2 rounded-xl shadow-soft"
               style={{ background: t.tone === 'error' ? '#B91C1C' : '#065F46', color: '#fff' }}>
            {t.text}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastCtx)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

