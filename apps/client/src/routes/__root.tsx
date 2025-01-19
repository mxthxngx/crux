import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import React from 'react'
export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <ScrollRestoration />
      <TanStackRouterDevtools />
    </>
  ),
})
