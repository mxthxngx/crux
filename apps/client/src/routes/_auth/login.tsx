import { LoginPage } from '@/pages/auth/LoginPage'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
export const Route = createFileRoute('/_auth/login')({
  component: LoginPage,
})
