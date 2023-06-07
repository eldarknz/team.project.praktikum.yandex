import { FC } from 'react';

import {
  Container,
  IContainerProps,
} from './Container';
import { Col, IColProps } from './Col';
import { Row, IRowProps } from './Row';

export const Grid: {
  Container: FC<IContainerProps>;
  Col: FC<IColProps>;
  Row: FC<IRowProps>;
} = {
  Container,
  Col,
  Row,
};
