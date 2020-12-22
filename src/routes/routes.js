import {Home, Detail, Category, Profile, LandingPages, Auth, SearchRecipe, About, Error} from 'pages';

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
    path: '/category/:slug',
    exact: true,
    component: Category
  },
  {
    name: "search",
    path: '/search',
    exact: true,
    component: SearchRecipe
  },
  {
    name: "Profile",
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    name: "About",
    path: '/about',
    exact: true,
    component: About
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
  },
  {
    name: "Error",
    path: '*',
    exact: true,
    component: Error
  }
];

export default routes;
