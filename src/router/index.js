import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Footer from '@/components/Footer'
import VHtml from '@/components/vHtml'
import event from '@/components/event'
import vBind from '@/components/vBind'
import vModel from '@/components/vModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/footer',
      name:'Footer',
      component:Footer
    },
    {
      path:'/vHtml',
      name:'vHtml',
      component:VHtml
    },{
      path:'/add',
      name:'event',
      component:event
    },
    {
      path:'/vBind',
      name:'vBind',
      component:vBind
    },
    {
      path:'/vModel',
      name:'vModel',
      component:vModel
    }
  ]
})
