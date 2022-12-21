<!-- 
    [ Header Component ]
 -->

<template>
    <header class="header-wrap">
        <h1>
            <router-link :to="'/'">
                로고
            </router-link>
        </h1>

        <div class="info-wrap">
            <ButtonComp :color="'green'" 
                        @click="$router.push('/login')">
                로그인
            </ButtonComp>
            <AvatarComp :text="'우'" 
                        :size="'medium'" />
        </div>
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
        .info-wrap {
            display: flex;
            align-items: center;
            .avatar-wrap {
                margin-left: 10px;
            }
        }
    }
</style>