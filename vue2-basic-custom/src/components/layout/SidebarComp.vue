<!-- 
    [ Sidebar Component ]
 -->

<template>
    <div class="sidebar-wrap">
        <ButtonComp 
            :color="'black'"
            :textButton="true"
            @click="$router.push('/')">
            홈
        </ButtonComp>
    </div>
</template>

<script>
    export default {
        name: 'SidebarComp',
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
    .sidebar-wrap {
        width: 250px;
        height: 100vh;
        background: #eee;
        padding: 15px;
        box-sizing: border-box;
    }
</style>
