export interface UpdateAvatarRequest {
  file: File;
}

export interface UpdateAvatarResponse {
  id: number;
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export const updateAvatar = (
  data: UpdateAvatarRequest
) => {
  console.log(data);

  if (Math.random() < 0.1) {
    throw new Error('Error!!!');
  }

  const response: UpdateAvatarResponse = {
    id: 1,
    firstName: 'string',
    secondName: 'string',
    login: 'string',
    email: 'string',
    phone: 'string',
    avatar: 'string',
  };

  return new Promise<UpdateAvatarResponse>(
    resolve =>
      setTimeout(() => resolve(response), 1000)
  );
};
