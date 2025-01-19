import { Link } from '@tanstack/react-router'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
  title: string
  isSignupPage?: boolean
}

export default function AuthLayout({
  children,
  title,
  isSignupPage = false,
}: LayoutProps) {
  return (
    <div className="h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center w-full sm:w-[420px]">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-8">
          {title}
        </h1>
        <div className="w-full md:h-auto md:w-full space-y-4">{children}</div>
      </div>
    </div>
  )
}
