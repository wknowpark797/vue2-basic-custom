<!-- 
    [ Default Layout Component ]
 -->

<template>
    <div class="wrapper">

        <!-- Home Button -->
        <button 
            type="button" 
            class="btn-home"
            @click="$router.push('/')">
            <font-awesome-icon icon="house" />
        </button>

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
        .btn-home {
            position: fixed;
            top: 10px;
            left: 10px;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 9;
            &:hover {
                background: $gray-06;
            }
            svg {
                height: 20px;
                color: $gray-04;
            }
        }
        .content-wrapper {
            padding: 35px 50px;
            margin-left: 250px;
            box-sizing: border-box;
        }
    }
</style>