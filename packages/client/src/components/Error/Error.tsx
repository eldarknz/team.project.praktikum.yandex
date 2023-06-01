import React from 'react';
import './Error.scss';
import { Button } from '@components/Button';
import { ROUTES } from '@routers/routes';

type OwnProps = {
  error: string;
  title: string;
};

type Props = OwnProps;

export const Error = ({
  error,
  title,
}: Props) => {
  const homePath = ROUTES.Home.path;

  return (
    <div className="error">
      <h1 className="error--name">{error}</h1>
      <h2 className="error--title">{title}</h2>
      <Button href={homePath}>
        Назад к игре
      </Button>
    </div>
  );
};
