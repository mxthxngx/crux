import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { Outlet } from '@tanstack/react-router'
export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
  beforeLoad: async ({ location }) => {
    // TODO: add if the user is authenticated, then autoredirect to /chat
  },
})

function AuthLayout() {
  return (
    <div className="h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center w-full sm:w-[420px]">
        <Outlet />
      </div>
    </div>
  )
}
