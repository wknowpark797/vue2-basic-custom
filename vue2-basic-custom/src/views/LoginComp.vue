<!-- 
    [ Login Component ]
 -->

<template>
    <div class="login-wrap">

        <!-- Home Button -->
        <button 
            type="button" 
            class="btn-home"
            @click="$router.push('/')">
            <font-awesome-icon icon="house" />
        </button>

        <div class="inner-login">
                
            <h2>Login</h2>

            <!-- 이메일 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.email" 
                    :placeholder="'이메일을 입력해주세요.'" />
            </div>

            <!-- 비밀번호 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.password" 
                    :placeholder="'비밀번호를 입력해주세요.'" />
            </div>

            <div class="btn-wrap">
                <ButtonComp class="btn-login">
                    로그인
                </ButtonComp>
                <ButtonComp 
                    class="btn-join" 
                    :color="'black'"
                    :textButton="true"
                    @click="$router.push('/join')">
                    회원가입
                </ButtonComp>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginComp',
        data() {
            return {
                inputParams: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .login-wrap {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn-home {
            position: fixed;
            top: 30px;
            left: 30px;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
                background: $main-04;
            }
            svg {
                height: 20px;
                color: $gray-04;
            }
        }
        .inner-login {
            width: 300px;
            padding-bottom: 100px;
            text-align: center;
            h2 {
                margin-bottom: 20px;
            }
            .input-wrap {
                margin-bottom: 10px;
            }
            .btn-wrap {
                text-align: right;
                .btn-login {
                    width: 100%;
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>