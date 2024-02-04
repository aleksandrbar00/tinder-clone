import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Feed = React.lazy(() =>
  import('~/lib/pages/feed').then((module) => ({
    default: module.FeedPage,
  }))
);

const Registration = React.lazy(() =>
  import('~/lib/pages/registration').then((module) => ({
    default: module.RegistrationPage,
  }))
);

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Feed />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
