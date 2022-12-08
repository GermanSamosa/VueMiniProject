import { createRouter, createWebHistory } from 'vue-router'
// import views from '../views'
import HomeView from '../views/HomeView.vue'
// import FriendManager from '../view/FriendManager'
// import AddFriend from '../view/AddFriend'
// import ViewFriend from '../view/ViewFriend'
// import EditFriend from '../view/EditFriend'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/friends',
    component: HomeView
  },
  {
    path: '/friends',
    name: 'FriendManager',
    component: AddFriend
  },
  {
    path: '/friends/add',
    name: 'AddFriend',
    component: AddFriend
  },
  {
    path: '/friends/edit/:friendId',
    name: 'EditFriend',
    component: EditFriend
  },
  {
    path: '/friends/view/:friendId',
    name: 'ViewFriend',
    component: ViewFriend
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
