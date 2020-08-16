import Vue from 'vue';
import VueRouter from 'vue-router';
// import Login from 'views/login';
// import Home from 'views/home';
// import User from 'views/user';
// import NotPage from 'views/notPage'
const Login = () => import('views/login')
const Home = () => import('views/home')
const User = () => import('views/user')
const NotPage = () => import('views/notPage')
const UserProfile = () => import('views/user/profile')
const UserPosts = () => import('views/user/posts')

Vue.use(VueRouter);

const routes = [
    { path: '*', component: NotPage  },
    { path: '', redirect:'/login' },
    { path: '/login', name: 'login' ,component: Login },
    { path: '/home', name: 'home' , component: Home },
    {
        path: '/user/:id', name: 'user' , component: User ,
        children: [
            {
                path: '',
                redirect: './profile'
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
    }
]

const  router = new VueRouter({
    mode: 'history',
    routes
})

export default router
