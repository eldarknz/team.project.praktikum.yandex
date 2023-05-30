import React, { Fragment, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '@layouts/Default'
import { AuthLayout } from '@layouts/Auth'
import { ErrorLayout } from '@layouts/Error'

import { PRIVATE_ROUTES, ROUTES } from './routes'
import { PrivateRoute } from '@routers/PrivateRoute'

const HomePage = lazy(() => import('@pages/Home'))
const AccountPage = lazy(() => import('@pages/Account'))
const ForumPage = lazy(() => import('@pages/Forum'))
const LeaderboardPage = lazy(() => import('@pages/Leaderboard'))
const GamePage = lazy(() => import('@pages/Game'))

const SignInPage = lazy(() => import('@pages/SignIn'))
const SignUpPage = lazy(() => import('@pages/SignUp'))

const Error404Page = lazy(() => import('@pages/Error404'))

const mapRoutes = (routes: { path: string; element: React.ReactNode }[]) => {
  return routes.map(({ path, element }) =>
    PRIVATE_ROUTES.includes(path) ? (
      <Route key={path} element={<PrivateRoute page={element} />} path={path} />
    ) : (
      <Route key={path} element={element} path={path}></Route>
    )
  )
}

export const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<DefaultLayout />}>
          {mapRoutes([
            { path: ROUTES.Account, element: <AccountPage /> },
            { path: ROUTES.Forum, element: <ForumPage /> },
            { path: ROUTES.Leaderboard, element: <LeaderboardPage /> },
            { path: ROUTES.Home, element: <HomePage /> },
            { path: ROUTES.Game, element: <GamePage /> },
          ])}
        </Route>

        <Route element={<AuthLayout />}>
          {mapRoutes([
            { path: ROUTES.SignIn, element: <SignInPage /> },
            { path: ROUTES.SignUp, element: <SignUpPage /> },
          ])}
        </Route>

        <Route element={<ErrorLayout />}>
          <Route element={<Error404Page />} path={'*'} />
        </Route>
      </Routes>
    </Fragment>
  )
}
