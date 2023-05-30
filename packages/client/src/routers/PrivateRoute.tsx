import { Fragment, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated'
import { ROUTES } from '@routers/routes'

interface PrivateRouteProps {
  page: ReactNode
}

export const PrivateRoute = ({ page }: PrivateRouteProps) => {
  const { isAuthenticated } = useIsViewerAuthenticated()
  console.log("WOW!!! It's private route!!!")

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.Home} />
  }

  return <Fragment>{page}</Fragment>
}
