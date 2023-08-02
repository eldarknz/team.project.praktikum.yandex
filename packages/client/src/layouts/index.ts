import { ComponentType } from 'react';

import { DefaultLayout } from './Default';
import { AuthLayout } from './Auth';
import { ErrorLayout } from './Error';
import { GameLayout } from './Game';

export enum Layout {
  Default,
  Auth,
  Error,
  Game,
}

export const LAYOUTS: [Layout, ComponentType][] = [
  [Layout.Default, DefaultLayout],
  [Layout.Auth, AuthLayout],
  [Layout.Error, ErrorLayout],
  [Layout.Game, GameLayout],
];
