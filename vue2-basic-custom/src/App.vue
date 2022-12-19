<template>
    <div id="app">

        <router-view />

        <!-- Alert Modal -->
        <AlertModalComp ref="alertModal" />

    </div>
</template>

<script>
    import { EventBus } from './utils/EventBus';

    export default {
        name: 'App',
        components: {
            
        },
        created() {
            
            // Alert Modal
            EventBus.$on('@showAlert', ({title, content, callback}) => {
                this.$refs.alertModal.show({title, content, callback});
            })

            // Confirm Modal
            EventBus.$on('@showConfirm', () => {

            })

            // Toast
            EventBus.$on('@showToast', () => {

            })

            // Loading
            EventBus.$on('@showLoading', () => {

            })
            EventBus.$on('@hideLoading', () => {

            })

        }
    }
</script>

<style lang="scss">
    @import './assets/scss/style.scss';
</style>
