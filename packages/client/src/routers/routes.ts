import { RouteAccessGuard } from '@routers/RouteGuard';
import { lazy, ComponentType } from 'react';

const LandingPage = lazy(() => import('@pages/Landing'));
const AccountPage = lazy(() => import('@pages/Account'));
const ForumPage = lazy(() => import('@pages/Forum'));
const LeaderboardPage = lazy(() => import('@pages/Leaderboard'));
const GamePage = lazy(() => import('@pages/Game'));
const SignInPage = lazy(() => import('@pages/SignIn'));
const SignUpPage = lazy(() => import('@pages/SignUp'));
const Error404Page = lazy(() => import('@pages/Error404'));
const Error500Page = lazy(() => import('@pages/Error500'));

const End = lazy(() => import('@pages/End'));
const Start = lazy(() => import('@pages/Start'));

export enum Layout {
  Default,
  Auth,
  Error,
  Game,
}

export type RouteItem = {
  path: string;
  isPrivate: boolean;
  component: ComponentType;
  layout: Layout;
};

export const ROUTES = {
  Home: {
    path: '/',
    accessType: undefined,
    component: LandingPage,
    layout: Layout.Default,
  },
  Forum: {
    path: '/forum',
    accessType: undefined,
    component: ForumPage,
    layout: Layout.Default,
  },
  Game: {
    path: '/game',
    accessType: RouteAccessGuard.Private,
    component: GamePage,
    layout: Layout.Game,
  },
  SignIn: {
    path: '/sign-in',
    accessType: RouteAccessGuard.Public,
    component: SignInPage,
    layout: Layout.Auth,
  },
  SignUp: {
    path: '/sign-up',
    accessType: RouteAccessGuard.Public,
    component: SignUpPage,
    layout: Layout.Auth,
  },
  Account: {
    path: '/account',
    accessType: RouteAccessGuard.Private,
    component: AccountPage,
    layout: Layout.Default,
  },
  Leaderboard: {
    path: '/leaderboard',
    accessType: RouteAccessGuard.Private,
    component: LeaderboardPage,
    layout: Layout.Default,
  },
  Start: {
    path: '/start',
    accessType: RouteAccessGuard.Private,
    component: Start,
    layout: Layout.Game,
  },
  End: {
    path: '/end',
    accessType: RouteAccessGuard.Private,
    component: End,
    layout: Layout.Game,
  },
  Error500: {
    path: '/error-500',
    accessType: undefined,
    component: Error500Page,
    layout: Layout.Error,
  },
  Error404: {
    path: '*',
    accessType: undefined,
    component: Error404Page,
    layout: Layout.Error,
  },
};
