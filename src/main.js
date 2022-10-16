import { createApp } from 'vue';
import numeralize from 'numeralize-ru';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(numeralize)
  .mount('#app');
