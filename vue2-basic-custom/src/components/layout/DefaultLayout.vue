<!-- 
    [ Default Layout Component ]
 -->

<template>
    <div class="wrapper">

        <!-- Sidebar -->
        <SidebarComp />

        <!-- View -->
        <div class="content-wrapper">
            <router-view />
        </div>
        
    </div>
</template>

<script>
    import SidebarComp from './SidebarComp.vue';

    export default {
        name: 'DefaultLayout',
        components: {
            SidebarComp
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
    .wrapper {
        .content-wrapper {
            padding: 35px 50px;
            margin-left: 250px;
            box-sizing: border-box;
        }
    }
</style>