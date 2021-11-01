import { getInputCorrectPlaceholder, getInputPlaceholder } from './helpers';

export const messages = {
  alerts: {
    error: {
      authError: 'Incorrect login or password !',
    },
  },
  auth: {
    isLoggedInName: 'is-logged-in',
  },
  components: {
    header: {
      login: 'Login',
      logout: 'Logout',
      home: 'Home',
    },

    addLocationModal: {
      titleMsg: 'Title',
      form: {
        titleInput: {
          label: 'Title',
          name: 'title',
          placeholder: getInputPlaceholder('title'),
        },

        coordinatesInput: {
          label: 'Coordinates',
          name: 'coordinates',
          placeholder: getInputPlaceholder('coordinates'),
        },

        descriptionInput: {
          label: 'Description',
          name: 'description',
          placeholder: getInputPlaceholder('description'),
        },

        tagsInput: {
          label: 'Tags',
          name: 'tags',
          placeholder: getInputPlaceholder('tags'),
        },
      },
    },
  },
  pages: {
    landingPage: {
      title: 'Landing Page',
    },
    loginPage: {
      title: 'Login Page',
      buttons: {
        loginBtn: 'Login',
      },
      form: {
        userNameInput: {
          label: 'User Name',
          name: 'email',
          placeholder: getInputCorrectPlaceholder('email'),
        },
        passwordInput: {
          label: 'Password',
          name: 'password',
          placeholder: getInputCorrectPlaceholder('password'),
        },
        loginBtn: 'Login',
      },
    },
  },
};
