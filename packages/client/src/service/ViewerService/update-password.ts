export interface UpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export const updatePassword = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data: UpdatePasswordRequest
) => {
  if (Math.random() < 0.1) {
    throw new Error('Error!!!');
  }

  return new Promise<void>(resolve =>
    setTimeout(resolve, 1000)
  );
};
