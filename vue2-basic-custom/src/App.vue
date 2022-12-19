<template>
    <div id="app">

        <router-view />

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
            EventBus.$on('@showAlert', () => {

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
