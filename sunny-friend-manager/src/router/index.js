import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendManager from '@/views/FriendManager.vue'
import AddFriend from '@/views/AddFriend.vue'
import ViewFriend from '@/views/ViewFriend.vue'
import EditFriend from '@/views/EditFriend.vue'
import PageNotFoundVue from '../views/PageNotFound.vue'


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
    component: FriendManager
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
},
{
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFoundVue
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
