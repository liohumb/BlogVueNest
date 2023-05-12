<template>
    <main class="main">
        <Header/>
        <router-view :key="$route.path"/>
    </main>
</template>

<script>
import Header from './navigations/header/Header.vue'

export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
@import './assets/styles/style';
</style>