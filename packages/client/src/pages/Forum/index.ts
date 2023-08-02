import { lazy } from 'react';

import { Layout } from '@layouts/index';

import { routes } from './routes';

const ForumPage = lazy(() => import('@pages/Forum/pages/List'));
const TopicPage = lazy(() => import('@pages/Forum/pages/Topic'));

export const pages = {
  Forum: {
    path: routes.forum,
    accessType: undefined,
    component: ForumPage,
    layout: Layout.Default,
  },
  TopicPage: {
    path: routes.topic,
    accessType: undefined,
    component: TopicPage,
    layout: Layout.Default,
  },
};
