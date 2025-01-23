import UserDetails from '@/pages/auth/UserDetails'
import { createFileRoute, redirect } from '@tanstack/react-router'
import React from 'react'
const isAuthenticated = () => true
export const Route = createFileRoute('/about')({
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: UserDetails,
})
