import SignupPage from '@/pages/auth/SignupPage'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
export const Route = createFileRoute('/_auth/signup')({
  component: SignupPage,
})
