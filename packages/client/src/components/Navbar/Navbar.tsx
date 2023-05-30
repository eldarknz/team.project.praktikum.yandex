import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { PRIVATE_ROUTES, ROUTES } from '@routers/routes'
import { useIsViewerAuthenticated } from '@hooks/useIsViewerAuthenticated'

import './Navbar.scss'

const LINKS = [
  {
    title: 'Главная',
    link: ROUTES.Home,
  },
  {
    title: 'Игра',
    link: ROUTES.Game,
  },
  {
    title: 'Лидерборд',
    link: ROUTES.Leaderboard,
  },
  {
    title: 'Профиль',
    link: ROUTES.Account,
  },
  {
    title: 'Форум',
    link: ROUTES.Forum,
  },
  {
    title: 'Sign-In',
    link: ROUTES.SignIn,
  },
  {
    title: 'Sign-Up',
    link: ROUTES.SignUp,
  },
]

export const Navbar = () => {
  const { isAuthenticated } = useIsViewerAuthenticated()

  const availableLinks = useMemo(
    () =>
      isAuthenticated
        ? LINKS
        : LINKS.filter(({ link }) => !PRIVATE_ROUTES.includes(link)),
    [isAuthenticated]
  )

  return (
    <div className="navbar">
      {availableLinks.map(({ title, link }) => (
        <NavLink
          key={title}
          to={link}
          className={({ isActive }) =>
            cn({
              'navbar-item': true,
              'navbar-item--active': isActive,
            })
          }>
          {title}
        </NavLink>
      ))}
    </div>
  )
}
