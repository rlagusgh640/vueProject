import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Team from '../views/Team.vue'
import MyProject from '../views/MyProject.vue'
import Education from '../views/Education.vue'
import LabscaleView from '../views/LabScale.vue'
import FanView from '../views/FanView.vue'
import JavaView from '../views/JavaView.vue'
import MictView from '../views/MictView'
import Potofolio from '../views/Potofolio'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myproject',
    name: 'MyProject',
    component:MyProject
  
  },
  {
    path: '/team',
    name: 'Team',
    component:Team
  
  },
  {
    path: '/education',
    name: 'Education',
    component:Education
  
  },
  {
    path:'/labscaleview',
    name:'LabscaleView',
    component:LabscaleView
  },
  {
    path:'/fanview',
    name:'FanView',
    component:FanView
  },
  {
    path:'/javaview',
    name:'JavaView',
    component:JavaView
  },
  {
    path:'/mictview',
    name:'MictView',
    component:MictView
  },
  {
    path:'/potofolio',
    name:'Potofolio',
    component:Potofolio
  }
  
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
