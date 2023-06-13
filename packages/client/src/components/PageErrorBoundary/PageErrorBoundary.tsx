import {
  Component,
  ErrorInfo,
  PropsWithChildren,
} from 'react';

import { ROUTES } from '@routers/routes';
import { StyledLink } from '@components/StyledLink';

import style from './PageErrorBoundary.module.scss';

interface PageErrorBoundaryState {
  hasError: boolean;
}

export class PageErrorBoundary extends Component<
  PropsWithChildren,
  PageErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(
    error: Error,
    info: ErrorInfo
  ) {
    console.error(error);
    console.error(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={style.pageErrorBoundary}>
          <h1>Something went wrong.</h1>
          <StyledLink to={ROUTES.Home.path}>
            На главную
          </StyledLink>
        </div>
      );
    }

    return this.props.children;
  }
}
