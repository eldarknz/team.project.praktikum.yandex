import { lazy, ComponentType } from 'react';

const LandingPage = lazy(
  () => import('@pages/Landing')
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
const Error500Page = lazy(
  () => import('@pages/Error500')
);

const End = lazy(() => import('@pages/End'));
const Start = lazy(() => import('@pages/Start'));

export enum Layout {
  Default = 'Default',
  Auth = 'Auth',
  Error = 'Error',
  Game = 'Game',
  Empty = 'Empty',
}

export enum RouteAccessType {
  PublicOnly = 'public-only',
  PrivateOnly = 'private-only',
  Common = 'common',
}

export const ROUTES = {
  Auth: {
    SignIn: {
      path: '/sign-in',
      access: RouteAccessType.PublicOnly,
      layout: Layout.Auth,
      component: SignInPage,
    },
    SignUp: {
      path: '/sign-up',
      access: RouteAccessType.PublicOnly,
      layout: Layout.Auth,
      component: SignUpPage,
    },
  },
  Home: {
    path: '/',
    access: RouteAccessType.Common,
    component: LandingPage,
    layout: Layout.Default,
  },
  Forum: {
    path: '/forum',
    access: RouteAccessType.Common,
    component: ForumPage,
    layout: Layout.Default,
  },
  Game: {
    Start: {
      path: '/start',
      access: RouteAccessType.PrivateOnly,
      component: Start,
      layout: Layout.Game,
    },
    Game: {
      path: '/game',
      access: RouteAccessType.PrivateOnly,
      component: GamePage,
      layout: Layout.Game,
    },
    End: {
      path: '/end',
      access: RouteAccessType.PrivateOnly,
      component: End,
      layout: Layout.Game,
    },
  },
  Leaderboard: {
    path: '/leaderboard',
    access: RouteAccessType.Common,
    component: LeaderboardPage,
    layout: Layout.Default,
  },
  Account: {
    path: '/account',
    access: RouteAccessType.PrivateOnly,
    component: AccountPage,
    layout: Layout.Default,
  },
  Error500: {
    path: 'error-500',
    access: RouteAccessType.Common,
    component: Error500Page,
    layout: Layout.Error,
  },
  Error404: {
    path: '*',
    access: RouteAccessType.Common,
    component: Error404Page,
    layout: Layout.Error,
  },
};

export type RouteItem = {
  path: string;
  access: RouteAccessType;
  component: ComponentType;
  layout: Layout;
};
