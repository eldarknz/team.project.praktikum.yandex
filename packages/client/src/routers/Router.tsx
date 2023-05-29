import { Fragment, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '@layouts/Default'
import { AuthLayout } from '@layouts/Auth'
import { ErrorLayout } from '@layouts/Error'

import { ROUTES } from './routes'

const HomePage = lazy(() => import('@pages/Home'))
const AccountPage = lazy(() => import('@pages/Account'))
const ForumPage = lazy(() => import('@pages/Forum'))
const LeaderboardPage = lazy(() => import('@pages/Leaderboard'))

const SignInPage = lazy(() => import('@pages/SignIn'))
const SignUpPage = lazy(() => import('@pages/SignUp'))

const Error404Page = lazy(() => import('@pages/Error404'))

export const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<AccountPage />} path={ROUTES.Account} />
          <Route element={<ForumPage />} path={ROUTES.Forum} />
          <Route element={<LeaderboardPage />} path={ROUTES.Leaderboard} />
          <Route element={<HomePage />} path={ROUTES.Home} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route element={<SignInPage />} path={ROUTES.SignIn} />
          <Route element={<SignUpPage />} path={ROUTES.SignUp} />
        </Route>

        <Route element={<ErrorLayout />}>
          <Route element={<Error404Page />} path={'*'} />
        </Route>
      </Routes>
    </Fragment>
  )
}
