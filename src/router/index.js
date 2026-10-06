import Vue from 'vue';
import VueRouter from 'vue-router';

import DashboardView from '../views/DashboardView.vue';
import UsersView from '../views/UsersView.vue';
import AnalyticsView from '../views/AnalyticsView.vue';
import FormFields from '../views/FormFields.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Dashboard', component: DashboardView },
    { path: '/users', name: 'Users', component: UsersView },
    { path: '/analytics', name: 'Analytics', component: AnalyticsView },
    { path: '/form-fields', name: 'Analytics', component: FormFields },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;