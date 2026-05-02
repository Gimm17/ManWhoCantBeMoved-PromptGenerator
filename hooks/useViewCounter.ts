'use client';
import { useEffect, useState } from 'react';

/**
 * Tracks page views using the /api/views endpoint.
 * Increments once per browser session (uses sessionStorage to avoid double-counting on HMR/navigation).
 * Returns the current view count or null while loading.
 */
export function useViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const already = sessionStorage.getItem('view_counted');

    if (already) {
      // Already counted this session — just fetch current count
      fetch('/api/views')
        .then(r => r.json())
        .then(d => setCount(d.count))
        .catch(() => {});
    } else {
      // First visit this session — increment
      fetch('/api/views', { method: 'POST' })
        .then(r => r.json())
        .then(d => {
          setCount(d.count);
          sessionStorage.setItem('view_counted', '1');
        })
        .catch(() => {});
    }
  }, []);

  return count;
}
