export interface UpdateUserRequest {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  phone: string;
}

export interface UpdateUserResponse {
  id: number;
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  phone: string;
}

export const updateUser = (
  data: UpdateUserRequest
) => {
  console.log(data);

  if (Math.random() < 0.1) {
    throw new Error('Error!!!');
  }

  const response: UpdateUserResponse = {
    id: 666,
    ...data,
  };

  return new Promise<UpdateUserResponse>(
    resolve =>
      setTimeout(() => resolve(response), 1000)
  );
};
