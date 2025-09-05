"use client"

import React, { useEffect, useState } from 'react'
import Loading from '@/app/loading'

interface Props {
  children: React.ReactNode
  footer?: React.ReactNode
  toaster?: React.ReactNode
}

export default function LoaderOfLink({ children, footer, toaster }: Props) {
//   const [visible, setVisible] = useState(true)

//   useEffect(() => {
//     const t = setTimeout(() => setVisible(false), 2000) // show loader for 2s
//     return () => clearTimeout(t)
//   }, [])

  // While loading, render only the Loading animation
//   if (visible) return <Loading />

  // After loader completes, render children and optional footer/toaster
  return (
    <>
      {children}
      {footer}
      {toaster}
    </>
  )
}
