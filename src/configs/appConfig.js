const activeConfig = 'dev'

const config = {
  dev: {
    appName: 'What in The Fridge',
    url: {
      api: 'http://recipe-apps.vercel.app',
      assets: 'http://recipe-apps.vercel.app',
      origin: 'http://recipe-apps.vercel.app'
    },
    firebase: {
      apiKey: "AIzaSyCHbWrKn0XpfuoA9Y71XR8AZu6CFioLhCM",
      authDomain: "recipe-apps-implementasi.firebaseapp.com",
      databaseURL: "https://recipe-apps-implementasi.firebaseio.com",
      projectId: "recipe-apps-implementasi",
      storageBucket: "recipe-apps-implementasi.appspot.com",
      messagingSenderId: "246543202961",
      appId: "1:246543202961:web:74dfc04d68eaf168b19d30",
      measurementId: "G-RMPSNYZLZK"
    },
  },
  prod: {
    appName: 'What in The Fridge',
    url: {
      api: 'http://recipe-apps.vercel.app',
      assets: 'http://recipe-apps.vercel.app',
      origin: 'http://recipe-apps.vercel.app'
    },
    firebase: {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: ''
    }
  }
};

const appConfig = config[activeConfig];

export default appConfig;
