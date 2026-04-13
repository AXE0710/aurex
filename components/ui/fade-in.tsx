'use client'

import React, { useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) observer.unobserve(domRef.current)
          }
        })
      },
      { rootMargin: '0px 0px -100px 0px' }
    )

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    }
  }, [])

  const getDirectionClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-12 opacity-0'
        case 'down': return '-translate-y-12 opacity-0'
        case 'left': return '-translate-x-12 opacity-0'
        case 'right': return 'translate-x-12 opacity-0'
        case 'none': return 'opacity-0'
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100'
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${getDirectionClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
