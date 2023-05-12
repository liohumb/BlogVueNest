<template>
    <form class="form"
          @submit.prevent="$emit('on-submit', form)">
        <div class="form__contents">
            <div class="form__contents-content">
                <label for="username"></label>
                <input type="text" name="username"
                       id="username" placeholder="Votre adresse email"
                       v-model="form.username">
            </div>
        </div>
        <div class="form__contents">
            <div class="form__contents-content">
                <label for="password"></label>
                <input type="password" name="password"
                       id="password" placeholder="Votre mot de passe"
                       v-model="form.password">
            </div>
        </div>
        <div class="form__contents">
            <div class="form__contents-content">
                <button type="submit">{{ button }}</button>
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
            }
        }
    },
    props: {
        button: {type: String},
        user: {type: Object}
    }
}
</script>

<style lang="scss" scoped>
@import '../form';
</style>
