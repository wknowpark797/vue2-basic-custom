<!-- 
    [ Default Layout Component ]
 -->

<template>
    <div class="wrapper">

        <!-- Header -->
        <HeaderComp />

        <!-- View -->
        <router-view />
        
    </div>
</template>

<script>
    import HeaderComp from './HeaderComp.vue';

    export default {
        name: 'DefaultLayout',
        components: {
            HeaderComp
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>