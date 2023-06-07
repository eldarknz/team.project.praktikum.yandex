export interface GetViewerResponse {
  email: string;
  login: string;
  firstName: string;
  secondName: string;
  phone: string;
}

export const getViewer = () => {
  const viewer: GetViewerResponse = {
    email: 'mayak@yandex.ru',
    login: 'Mayak',
    firstName: 'Вова',
    secondName: 'Маяковский',
    phone: '+7 (909) 967 30 30',
  };

  return new Promise<GetViewerResponse>(resolve =>
    setTimeout(() => resolve(viewer), 1000)
  );
};
