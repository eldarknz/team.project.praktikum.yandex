import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { ROUTES } from '@routers/routes'

import './Navbar.scss'

const LINKS = [
  {
    title: 'Игра',
    link: ROUTES.Home,
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
  return (
    <div className="navbar">
      {LINKS.map(({ title, link }) => (
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
