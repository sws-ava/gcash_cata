//
// import { createApp } from 'vue'
// import App from './App.vue'
// // import router from './router'
// // import store from './store'
//
//
//
// createApp(App).mount('#app')
//     // createApp(App).use(store).use(router).mount('#app')

import Vue from 'vue'
import App from './App.vue'

new Vue({
    // provide: () => ({
    //     API_HOST: API_HOST,
    // }),
    // router,
    // store,
    render: h => h(App)
}).$mount('#app')
