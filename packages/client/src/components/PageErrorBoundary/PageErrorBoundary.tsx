import {
  Component,
  ErrorInfo,
  Fragment,
  PropsWithChildren,
} from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@routers/routes';

interface PageErrorBoundaryState {
  hasError: boolean;
}

// TODO: add styles to component
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
    console.error(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <h1>Something went wrong.</h1>
          <Link to={ROUTES.Home}>На главную</Link>
        </Fragment>
      );
    }

    return this.props.children;
  }
}
