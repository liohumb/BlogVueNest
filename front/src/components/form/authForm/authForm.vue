<template>
    <form class="form"
          @submit.prevent="$emit('on-submit', form)">
        <div class="form__contents">
            <div class="form__contents-content">
                <label for="username"></label>
                <input type="email" name="username"
                       id="username" placeholder="Votre adresse email"
                       v-model="form.username" required @blur="validateEmail">
            </div>
        </div>
        <div class="form__contents">
            <div class="form__contents-content">
                <label for="password"></label>
                <input :type="passwordVisible ? 'text' : 'password'" name="password"
                       id="password" placeholder="Votre mot de passe"
                       v-model="form.password">
                <i @click="togglePasswordVisible"
                   :class="[passwordVisible ? 'bx-show-alt' : 'bx-low-vision', 'bx']"/>
                <div v-if="validatePassword.errors.length > 0" class="form__contents-instructions">
                    <p v-for="error in validatePassword.errors">{{ error }}</p>
                </div>
            </div>
        </div>
        <div class="form__contents">
            <div class="form__contents-content">
                <button type="submit">{{ button }}</button>
            </div>
        </div>
        <div v-if="message || error" class="form__contents">
            <div class="form__contents-content">
                <span v-if="message" class="form__contents-content--error">{{ message.email }}</span>
                <span v-if="error" class="form__contents-content--error">{{ error }}</span>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: this.user?.username || '',
                password: this.user?.password || ''
            },
            rules: [
                { message: 'Au moins une lettre en minuscule', regex: /[a-z]+/ },
                { message: 'Au moins une lettre en majuscule', regex: /[A-Z]+/ },
                { message: 'Minimum 8 caractère', regex: /.{8,}/ },
                { message: 'Au moins un chiffre', regex: /[0-9]+/ }
            ],
            checkPassword: '',
            passwordVisible: false
        }
    },
    props: {
        button: { type: String },
        user: { type: Object },
        message: '',
        error: { type: String }
    },
    methods: {
        validateEmail() {
            if ( /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test( this.email ) ) {
                this.message['email'] = 'Merci de renseigner un email valide'
            } else {
                this.message['email'] = ''
            }
        },
        togglePasswordVisible() {
            this.passwordVisible = !this.passwordVisible
        }
    },
    computed: {
        validatePassword() {
            let errors = []

            for ( let condition of this.rules ) {
                if ( !condition.regex.test( this.form.password ) ) {
                    errors.push( condition.message )
                }
            }

            if ( errors.length === 0 ) {
                return { valid: true, errors }
            } else {
                return { valid: false, errors }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../form';
</style>
