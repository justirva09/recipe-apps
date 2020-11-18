import {Home, Detail, Category, Profile, LandingPages, Auth} from 'pages';

const routes = [
  {
    name: "Home",
    path: '/beranda',
    exact: true,
    component: Home
  },
  {
    name: "Detail",
    path: '/detail/:id/:title',
    exact: true,
    component: Detail
  },
  {
    name: "Category",
    path: '/category',
    exact: true,
    component: Category
  },
  {
    name: "Profile",
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    name: "Landing Page",
    path: '/',
    exact: true,
    component: LandingPages
  },
  {
    name: "Login",
    path: '/login',
    exact: true,
    component: Auth
  }
];

export default routes;
