import { createRouter, createWebHistory } from 'vue-router'


const category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Home = () => import('views/home/Home')
const Shopcar = () => import('views/shop/Shopcar')


const routes = [
  {
    path: '/',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/Shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
