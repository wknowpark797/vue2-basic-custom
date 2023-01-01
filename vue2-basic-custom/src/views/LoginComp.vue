<!-- 
    [ 로그인 컴포넌트 ]
 -->

<template>
    <div class="login-wrap">
        <div class="inner-login">
                
            <h2>로그인</h2>

            <!-- 이메일 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="loginParams.email" 
                    :placeholder="'이메일을 입력해주세요.'"
                    :errorMsg="valid.email"
                    @keyup="validCheck"
                    @enter="onClickLogin" />
            </div>

            <!-- 비밀번호 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="loginParams.password" 
                    :placeholder="'비밀번호를 입력해주세요.'"
                    :errorMsg="valid.password"
                    @keyup="validCheck"
                    @enter="onClickLogin" />
            </div>

            <div class="btn-wrap">
                <ButtonComp 
                    class="btn-login"
                    :color="'blue'"
                    @click="onClickLogin">
                    로그인
                </ButtonComp>
                <ButtonComp 
                    class="btn-join" 
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
                loginParams: {
                    email: '',
                    password: ''
                },
                valid: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            validCheck() {
                this.valid.email = this.loginParams.email ? '' : '필수 입력 항목입니다.';
                this.valid.password = this.loginParams.password ? '' : '필수 입력 항목입니다.';

                return !this.valid.email && !this.valid.password;
            },
            onClickLogin() {
                if(this.validCheck()) {
                    alert('로그인 되었습니다.');
                }
            }
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
            padding-bottom: 100px;
            text-align: center;
            h2 {
                margin-bottom: 20px;
            }
            .input-wrap {
                margin-bottom: 10px;
            }
            .btn-wrap {
                button {
                    width: 100%;
                    margin-top: 10px;
                }
            }
        }
    }
</style>