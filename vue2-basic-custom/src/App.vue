<template>
    <div id="app">

        <router-view />

        <!-- Alert Modal -->
        <AlertModalComp ref="alertModal" />

        <!-- Confirm Modal -->
        <ConfirmModalComp ref="confirmModal" />

        <!-- Toast -->
        <ToastComp ref="toastBar" />

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
            EventBus.$on('@showConfirm', ({title, content, callback}) => {
                this.$refs.confirmModal.show({title, content, callback});
            })

            // Toast
            EventBus.$on('@showToast', ({type, content, callback}) => {
                this.$refs.toastBar.show({type, content, callback});
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
