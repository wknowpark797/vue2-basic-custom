<!-- 
    [ Header Component ]
 -->

<template>
    <header class="header-wrap">
        <h1>
            <router-link :to="'/'">
                HOME
            </router-link>
        </h1>
        <AvatarComp :text="'A'" 
                    :size="'medium'" />
    </header>
</template>

<script>
    export default {
        name: 'HeaderComp',
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
    .header-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        h1 {
            font-size: 20px;
            margin: 0;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
</style>