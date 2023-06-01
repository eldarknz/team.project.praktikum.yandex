import { lazy, ComponentType } from 'react';

const HomePage = lazy(
  () => import('@pages/Home')
);
const AccountPage = lazy(
  () => import('@pages/Account')
);
const ForumPage = lazy(
  () => import('@pages/Forum')
);
const LeaderboardPage = lazy(
  () => import('@pages/Leaderboard')
);
const GamePage = lazy(
  () => import('@pages/Game')
);
const SignInPage = lazy(
  () => import('@pages/SignIn')
);
const SignUpPage = lazy(
  () => import('@pages/SignUp')
);
const Error404Page = lazy(
  () => import('@pages/Error404')
);

export enum Layout {
  Default,
  Auth,
  Error,
}

export type RouteItem = {
  path: string;
  isPrivate: boolean;
  component: ComponentType;
  layout: Layout;
};

export const ROUTES: Record<string, RouteItem> = {
  Home: {
    path: '/',
    isPrivate: false,
    component: HomePage,
    layout: Layout.Default,
  },
  Forum: {
    path: '/forum',
    isPrivate: false,
    component: ForumPage,
    layout: Layout.Default,
  },
  Game: {
    path: '/game',
    isPrivate: true,
    component: GamePage,
    layout: Layout.Default,
  },
  SignIn: {
    path: '/sign-in',
    isPrivate: false,
    component: SignInPage,
    layout: Layout.Auth,
  },
  SignUp: {
    path: '/sign-up',
    isPrivate: false,
    component: SignUpPage,
    layout: Layout.Auth,
  },
  Account: {
    path: '/account',
    isPrivate: true,
    component: AccountPage,
    layout: Layout.Default,
  },
  Leaderboard: {
    path: '/leaderboard',
    isPrivate: false,
    component: LeaderboardPage,
    layout: Layout.Default,
  },
  Error404: {
    path: '*',
    isPrivate: false,
    component: Error404Page,
    layout: Layout.Error,
  },
};
