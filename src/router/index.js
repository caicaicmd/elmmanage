import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'

// 异步加载
const Home = () => import('../views/Home/index.vue')
const DataManage = () => import('../views/DataManage/index.vue')
const UserList = () => import('../views/DataManage/UserList.vue')
const MerChantList = () => import('../views/DataManage/MerChantList.vue')
const DataAdd = () => import('../views/DataAdd/index.vue')
const AdminSetting = () => import('../views/Setting/AdminSetting.vue')
const UserFenbu  = () => import('../views/UserFenbu/UserFenbu.vue')
const About = () => import('../views/About/AboutMe.vue')
const FoodList = () => import('../views/DataManage/FoodList.vue')
const OrderList = () => import('../views/DataManage/OrderList.vue')
const AdminList = () => import ('../views/DataManage/AdminList.vue')
const AddMerChant = () => import('../views/DataAdd/AddMerChant.vue')
const AddFood = () => import('../views/DataAdd/AddFood.vue')

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/datamanage',
        name: 'DataManage',
        component: DataManage,
        redirect: '/datamanage/userlist',
        children: [
          {
            path: 'userlist',
            name: 'UserList',
            component: UserList
          },
          {
            path: 'merchantlist',
            name: 'MerChantList',
            component: MerChantList
          },
          {
            path: 'foodlist',
            name: 'FoodList',
            component: FoodList
          },
          {
            path: 'orderlist',
            name: 'OrderList',
            component: OrderList
          },
          {
            path: 'adminlist',
            name: 'AdminList',
            component: AdminList
          }
        ]

      },
      {
        path: '/dataadd',
        name: 'DataAdd',
        component: DataAdd,
        redirect: '/dataadd/addmerchant',
        children: [
          {
            path: 'addmerchant',
            name: 'AddMerChant',
            component: AddMerChant
          },
          {
            path: 'addfood',
            name: 'AddFood',
            component: AddFood
          }
        ]
      },
      {
        path: '/adminsetting',
        name: 'AdminSetting',
        component: AdminSetting
      },
      {
        path: '/userfenbu',
        name: 'UserFenbu',
        component: UserFenbu
      },
      {
        path: '/adout',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
