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
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            windowTop: 0,
            headerScroll: false
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
            console.log(this.windowTop)

            this.headerScroll = this.windowTop > 75;
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'header';
</style>