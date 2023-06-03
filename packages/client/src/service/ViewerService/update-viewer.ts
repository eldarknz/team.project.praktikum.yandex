export interface UpdateViewerRequest {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  phone: string;
}

export interface UpdateViewerResponse {
  id: number;
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  phone: string;
}

export const updateViewer = (
  data: UpdateViewerRequest
) => {
  console.log(data);

  if (Math.random() < 0.1) {
    throw new Error('Error!!!');
  }

  const response: UpdateViewerResponse = {
    id: 666,
    ...data,
  };

  return new Promise<UpdateViewerResponse>(
    resolve =>
      setTimeout(() => resolve(response), 1000)
  );
};
