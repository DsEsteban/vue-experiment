// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);


/* router  */
import PageHome from './components/pages/Home';
import PageAbout from './components/pages/About';

const router = new VueRouter({
	routes : [
	  {
	    path: '/',
	    component: PageHome
	  },
	  {
	    path: '/about',
	    component: PageAbout
	  }
	]
});
/* router  */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
});

