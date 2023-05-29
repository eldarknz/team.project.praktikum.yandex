import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { PageLoader } from '@components/PageLoader'
import { ROUTES } from '@routers/routes'

export const ErrorLayout = () => {
  return (
    <main className="error-layout">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>

      <NavLink to={ROUTES.Home}>To game</NavLink>
    </main>
  )
}
