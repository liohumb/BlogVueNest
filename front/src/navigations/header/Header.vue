<template>
    <header :class="[headerScroll && 'header__active', 'header']">
        <router-link to="/" class="header__logo">_blog</router-link>
        <ul class="header__menu">
            <li>
                <router-link to="/posts" class="header__menu-link">Articles</router-link>
            </li>
            <li>
                <router-link to="/ajouter-un-post" class="header__menu-link">Ajouter</router-link>
            </li>
            <li>
                <router-link to="/contact" class="header__menu-link">Contact</router-link>
            </li>
            <li>
                <router-link v-if="!user" to="/connexion" class="header__menu-link">
                    <i class='bx bxs-user header__menu-link--icon'/>
                </router-link>
                <span v-if="user" v-on:click="disconnect" class="header__menu-link">
                    <i class='bx bx-log-out header__menu-link--icon'/>
                </span>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            windowTop: 0,
            headerScroll: false,
            user: localStorage.getItem('user')
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll(e) {
            this.windowTop = e.target.documentElement.scrollTop
            this.headerScroll = this.windowTop > 75
        },
        disconnect() {
            localStorage.removeItem('user')
            window.location.reload()
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'header';
</style>