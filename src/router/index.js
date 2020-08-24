import Vue from 'vue';
import VueRouter from 'vue-router';

const Login = () => import('views/login')
const Home = () => import('views/home')
const User = () => import('views/user')
const NotPage = () => import('views/notPage')
const UserProfile = () => import('views/user/profile')
const UserPosts = () => import('views/user/posts')
const Tab = () => import('views/tab')

Vue.use(VueRouter);

const routes = [
    {path: '*', component: NotPage},
    {path: '', redirect: '/login'},
    {path: '/login', name: 'login', component: Login},
    {path: '/home', name: 'home', component: Home},
    {
        path: '/user', name: 'user', component: User,
        children: [
            {
                path: '',
                component: UserPosts
            },
            {
                name: 'profile',
                path: 'profile',
                component: UserProfile
            },
            {
                name: 'posts',
                path: 'posts',
                component: UserPosts
            }
        ]
    },
    {
        path: '/tab',
        name: 'tab',
        component: Tab
    }

]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
