import { getInputCorrectPlaceholder, getInputPlaceholder } from './helpers';

export const messages = {
  alerts: {
    error: {
      authError: 'Incorrect login or password !',
      getWeatherFailed: 'Get Weather Failed !',
      emptyLocatorsList: 'your locations list is empty! Please add a location',
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

        locationInput: {
          label: 'City',
          name: 'city',
          placeholder: getInputPlaceholder('city'),
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

        addLocationBtnMsg: 'Add Location',
      },
    },
  },
  pages: {
    landingPage: {
      title: 'Landing Page',
      modal: {
        modalTitle: 'Add Location Form',
      },
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
