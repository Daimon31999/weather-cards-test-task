import { getInputCorrectPlaceholder } from './helpers';

export const messages = {
  alerts: {},
  components: {
    header: {
      login: 'Login',
    },
  },
  pages: {
    landingPage: {
      title: 'Landing Page',
    },
    authPage: {
      title: 'Login Page',
      buttons: {
        loginBtn: 'Login',
      },
      form: {
        emailInput: {
          label: 'E-mail',
          name: 'email',
          placeholder: getInputCorrectPlaceholder('email'),
        },
        passwordInput: {
          label: 'Password',
          name: 'password',
          placeholder: getInputCorrectPlaceholder('password'),
        },
        rememberMe: 'Remember me',
      },
    },
  },
};
