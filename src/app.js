Vue.config.devtools = true
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import store from './store'

// use vue plugins
Vue.use( VueCookie )
Vue.use( VueRouter )
Vue.use( VueAxios, axios )
Vue.use( VeeValidate )

// import and register components
import Main from './components/Main.vue'
import Archive from './components/pages/Archive.vue'
Vue.component( 'archive', Archive )
import Item from './components/pages/Item.vue'
Vue.component( 'item', Item )
import Attachment from './components/pages/Attachment.vue'
Vue.component( 'attachment', Attachment )
import Lightbox from './components/pages/Lightbox.vue'
Vue.component( 'lightbox', Lightbox )
import Checkout from './components/pages/Checkout.vue'
Vue.component( 'checkout', Checkout )
import Search from './components/pages/Search.vue'
Vue.component( 'search', Search )
import Filters from './components/pages/Filters.vue'
Vue.component( 'filters', Filters )
import NotFound from './components/pages/NotFound.vue'
Vue.component( 'not-found', NotFound )

import Modal from './components/parts/Modal.vue'
Vue.component( 'modal', Modal )
import Expander from './components/parts/Expander.vue'
Vue.component( 'expander', Expander )
import Thumbnail from './components/parts/Thumbnail.vue'
Vue.component( 'thumbnail', Thumbnail )
import CartForm from './components/parts/CartForm.vue'
Vue.component( 'cart-form', CartForm )
// import Tabs from './components/parts/Tabs.vue'
// Vue.component( 'tabs', Tabs )
// import Tab from './components/parts/Tab.vue'
// Vue.component( 'tab', Tab )

// define routes
const router = new VueRouter( {
	mode: 'history',
	routes: [

		{ path: '/' + sell_media.archive_path + '/:page(\\d+)?', name: 'archive', component: Archive },
		{ path: '/' + sell_media.search_path + '/:page(\\d+)?', name: 'search', component: Search },
		{ path: '/' + sell_media.archive_path + '/:slug', name: 'item', component: Item },
		{ path: '/' + sell_media.archive_path + '/:prefix/:slug', name: 'attachment', component: Attachment },
		{ path: '/' + sell_media.checkout_path, name: 'checkout', component: Checkout },
		{ path: '/' + sell_media.lightbox_path, name: 'lightbox', component: Lightbox },
		{ path: '/filters', name: 'filters', component: Filters },
		{ path: '*', component: NotFound },
		// { path: sell_media.thanks_url, name: 'thanks', component: Thanks },
		// { path: sell_media.dashboard_url, name: 'dashboard', component: Dashboard },
		// { path: sell_media.login_url, name: 'login', component: Login },
		// { path: sell_media.search_url, name: 'search', component: Search },

	]
} );

// init Vue
new Vue({
	el: '#sell-media-app',
	store,
	router,
	beforeCreate() {
		this.$store.commit('initCart');
	},
	render: h => h(Main)
})
