import { createHead } from '@unhead/vue';
import { createApp } from 'vue';
import App from './DoubleHD/main.vue';

const app = createApp(App);
const head = createHead();
app.use(head);
app.mount('#app');
