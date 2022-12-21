<!-- 
    [ Default Layout Component ]
 -->

<template>
    <div class="wrapper">

        <!-- Header -->
        <HeaderComp />

        <!-- View -->
        <div class="content-wrapper">
            <router-view />
        </div>
        
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
    .content-wrapper {
        padding-top: 50px;
    }
</style>