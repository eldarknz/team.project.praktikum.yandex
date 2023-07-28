import { IS_DEV } from '@constants';

import { createApp as createDevApp } from './app.dev';
import { createApp as createProdApp } from './app.prod';

export const createApp = IS_DEV ? createDevApp : createProdApp;
