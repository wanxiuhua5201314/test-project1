import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import cssExercisePage from '@/components/cssExercisePage.vue'
import jsExercisePage from '@/components/jsExercisePage.vue'
import htmlExercisePage from '@/components/htmlExercisePage.vue'
import componentExercisePage from '@/components/componentExercisePage.vue'
import projectPage from '@/components/projectPage'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }, {
      path: '/cssExercisePage',
      name: 'cssExercisePage',
      component: cssExercisePage
    },
    {
      path: '/jsExercisePage',
      name: 'jsExercisePage',
      component: jsExercisePage
    },
    {
      path: '/htmlExercisePage',
      name: 'htmlExercisePage',
      component: htmlExercisePage
    },
    {
      path: '/componentExercisePage',
      name: 'componentExercisePage',
      component: componentExercisePage
    },
    {
      path: '/projectPage',
      name: 'projectPage',
      component: projectPage
    }
  ]
})
