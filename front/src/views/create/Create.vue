<template>
    <section class="create section">
        <div class="create__container section__container">
            <h1 class="create__title section__title">_ajouter un article</h1>
            <Form/>
        </div>
    </section>
</template>

<script>
import Form from '../../components/form/postForm/postForm.vue'
export default {
    components: {
        Form
    }
}
</script>

<style lang="scss" scoped>
@import 'create';
</style>