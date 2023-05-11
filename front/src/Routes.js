import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home/Home.vue';
import Posts from './pages/posts/Posts.vue';
import Post from './pages/post/Post.vue';
import Create from './pages/create/Create.vue';
import Edit from './pages/edit/Edit.vue';

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {name: 'home', path: '/', component: Home},
        {name: 'posts', path: '/posts', component: Posts},
        {name: 'post', path: '/post/:postID', component: Post},
        {name: 'create', path: '/ajouter-un-post', component: Create},
        {name: 'edit', path: '/post/modifier/:postID', component: Edit}
    ]
})