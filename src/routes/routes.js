import {Home, Detail, Category, Profile} from 'pages';

const routes = [
  {
    name: "Home",
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: "Detail",
    path: '/detail/:id',
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
  }
];

export default routes;
