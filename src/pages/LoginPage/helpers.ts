import { VALID_PASSWORD_LENGTH, VALID_USER_NAME_LENGTH } from '../../utils';

export interface IFormValues {
  email: string;
  password: string;
}

export const validateUserName = (userName: string) => {
  return userName?.length >= VALID_USER_NAME_LENGTH;
};

export const validatePassword = (password: string) => {
  return password?.length >= VALID_PASSWORD_LENGTH;
};
