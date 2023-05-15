<template>
    <section class="auth section">
        <div class="auth__container section__container">
            <h1 :class="[error && 'auth__title-error', 'auth__title section__title']">{{ title }}</h1>
            <authForm @on-submit="authUser" :error="error"
                      :button="page === 'connexion' ? 'connexion' : 'inscription'"/>
            <span class="auth__change">
                Vous souhaitez plutôt vous
                <router-link v-if="page === 'connexion'" to="/inscription"
                             class="auth__change-link">inscrire</router-link>
                <router-link v-if="page !== 'connexion'" to="/connexion"
                             class="auth__change-link">connecter</router-link>
                ?
            </span>
        </div>
    </section>
</template>

<script>
import authForm from "../../../components/form/authForm/authForm.vue";
import axios from "axios";
import {server} from "../../../utils/helper.js";
import Routes from "../../../Routes.js";

export default {
    data() {
        return {
            page: '',
            path: '',
            error: ''
        }
    },
    created() {
        this.page = this.$route.name

        if (this.page === 'register') {
            this.path = 'users/signup'
        } else if (this.page === 'connexion') {
            this.path = 'auth/login'
        }
    },
    methods: {
        authUser(userData) {
            axios.post(`${server.baseURL}/${this.path}`, userData)
                .then(res => {
                    if (this.page === 'connexion') {
                        localStorage.setItem('user', res.data.user_id)
                        Routes.push({name: 'home'})
                    } else if (this.page === 'register') {
                        Routes.push({name: 'connexion'})
                    }
                })
                .catch(e => {
                    if (e.response.status === 401) {
                        this.error = 'Merci de vérifier vos identifiants et de réessayer'
                    } else {
                        this.error = 'Une erreur est survenue, merci de réessayer ultérieurement'
                    }
                })
        }
    },
    components: {
        authForm
    },
    props: ['title']
}
</script>

<style lang="scss" scoped>
@import 'auth';
</style>