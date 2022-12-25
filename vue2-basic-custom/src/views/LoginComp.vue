<!-- 
    [ Login Component ]
 -->

<template>
    <div class="login-wrap">
        <div class="inner-login">

            <h2>Login</h2>

            <!-- 이메일 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.email" 
                    :placeholder="'내용 입력'" />
            </div>

            <!-- 비밀번호 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.password" 
                    :placeholder="'내용 입력'" />
            </div>

            <div class="btn-wrap">
                <ButtonComp class="btn-login">
                    로그인
                </ButtonComp>
                <ButtonComp 
                    class="btn-signup" 
                    :color="'black'"
                    :textButton="true">
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
        .inner-login {
            width: 300px;
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
                }
            }
        }
    }
</style>