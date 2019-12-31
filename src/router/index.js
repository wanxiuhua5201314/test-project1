import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/mainPage'
import cssExercisePage from '@/components/cssExercisePage.vue'
import cssExerciseMorePage from '@/components/cssExercise/cssExerciseMorePage.vue'
import cssExerciseMorePage1 from '@/components/cssExercise/cssExerciseMorePage1.vue'
import jsExercisePage from '@/components/jsExercisePage.vue'
import htmlExercisePage from '@/components/htmlExercisePage.vue'
import componentExercisePage from '@/components/componentExercisePage.vue'
import projectPage from '@/components/projectPage'
import ES6ExercisePage from '@/components/ES6ExercisePage'
import vueExercisePage from '@/components/vueExercisePage'
import jsExerciseMorePage from '@/components/jsExerciseMorePage'
import jsExerciseMorePage2 from '@/components/jsExerciseMorePage2'
import testVueInstallPage from '@/components/testVueInstallPage'
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
      path: '/cssExerciseMorePage',
      name: 'cssExerciseMorePage',
      component: cssExerciseMorePage
    },
    {
      path: '/cssExerciseMorePage1',
      name: 'cssExerciseMorePage1',
      component: cssExerciseMorePage1
    },
    {
      path: '/jsExercisePage',
      name: 'jsExercisePage',
      component: jsExercisePage
    },
    {
      path: '/jsExerciseMorePage',
      name: 'jsExerciseMorePage',
      component: jsExerciseMorePage
    },
    {
      path: '/jsExerciseMorePage2',
      name: 'jsExerciseMorePage2',
      component: jsExerciseMorePage2
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
    },
    {
      path: '/ES6ExercisePage',
      name: 'ES6ExercisePage',
      component: ES6ExercisePage
    },
    {
      path: '/vueExercisePage',
      name: 'vueExercisePage',
      component: vueExercisePage
    },
    {
      path: '/testVueInstallPage',
      name: 'testVueInstallPage',
      component: testVueInstallPage
    }

  ]
})
