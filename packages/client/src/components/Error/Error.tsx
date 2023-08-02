import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/Button';
import { ROUTES } from '@routers/routes';

import './Error.scss';

type OwnProps = {
  error: string;
  title: string;
};

type Props = OwnProps;

export const Error = ({ error, title }: Props) => {
  const navigate = useNavigate();
  const handleHomeClick = useCallback(() => navigate(ROUTES.Home.path), [navigate]);

  useEffect(() => {
    document.title = `Ошибка ${error}`;
  }, [error]);

  return (
    <div className="error">
      <h1 className="error__name">{error}</h1>
      <h2 className="error__title">{title}</h2>
      <Button className="basicButton basicButton--link" onClick={handleHomeClick}>
        Назад к игре
      </Button>
    </div>
  );
};
