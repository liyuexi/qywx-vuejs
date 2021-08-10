import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import { setupRouterGuard } from '/@/router/guard';


async function bootstrap() {
    const app = createApp(App);
    app.use(router);
    app.use(store);
    // Configure routing
    // setupRouter(app);
    // router-guard
    //setupRouterGuard(router);
    // Mount when the route is ready
    // https://next.router.vuejs.org/api/#isready
    // await router.isReady();
    
    app.mount('#app');

}

void bootstrap();
