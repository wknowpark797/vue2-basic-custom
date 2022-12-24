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
        display: flex;
        .content-wrapper {
            flex: 1;
            padding: 20px;
        }
    }
</style>