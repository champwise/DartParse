import LoginPage from './pages/LoginPage.vue';
import AboutPage from './pages/AboutPage.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];
