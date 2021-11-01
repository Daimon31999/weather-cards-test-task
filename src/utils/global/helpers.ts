import { messages } from '..';

export const getInputPlaceholder = (fieldName: string): string => {
  return `Please input ${fieldName}`;
};

export const getInputCorrectPlaceholder = (fieldName: string): string => {
  return `Please input correct ${fieldName}`;
};

export const getUserAuthenticatedState = (): boolean => {
  const { isLoggedInName } = messages.auth;

  return localStorage.getItem(isLoggedInName) === 'true' || false;
};

export const setUserAuthenticatedState = (status: boolean) => {
  const { isLoggedInName } = messages.auth;

  localStorage.setItem(isLoggedInName, status.toString());
};
