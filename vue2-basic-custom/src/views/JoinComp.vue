<!-- 
    [ 회원가입 컴포넌트 ]
 -->

<template>
    <div class="join-wrap">
        <div class="inner-join">

            <h2>회원가입</h2>

            <!-- 이메일 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="joinParams.email" 
                    :placeholder="'이메일을 입력해주세요.'"
                    :errorMsg="valid.email"
                    @keyup="validCheck"
                    @enter="onClickJoin" />
            </div>

            <!-- 이름 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="joinParams.name" 
                    :placeholder="'이름을 입력해주세요.'"
                    :errorMsg="valid.name"
                    @keyup="validCheck"
                    @enter="onClickJoin" />
            </div>

            <!-- 부서 -->
            <div class="dropdown-wrap">
                <DropdownComp 
                    v-model="joinParams.department" 
                    :options="departmentOptions" />
            </div>

            <!-- 비밀번호 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="joinParams.password" 
                    :placeholder="'비밀번호를 입력해주세요.'"
                    :errorMsg="valid.password"
                    @keyup="validCheck"
                    @enter="onClickJoin" />
            </div>

            <!-- 비밀번호 확인 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="joinParams.passwordConfirm" 
                    :placeholder="'비밀번호를 한번 더 입력해주세요.'"
                    :errorMsg="valid.passwordConfirm"
                    @keyup="validCheck"
                    @enter="onClickJoin" />
            </div>

            <div class="btn-wrap">
                <ButtonComp 
                    class="btn-join"
                    :color="'blue'"
                    @click="onClickJoin">
                    회원가입
                </ButtonComp>
                <ButtonComp 
                    class="btn-login"
                    @click="$router.push('/login')">
                    로그인 이동
                </ButtonComp>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'JoinComp',
        data() {
            return {
                joinParams: {
                    email: '',
                    name: '',
                    department: '1',
                    password: '',
                    passwordConfirm: ''
                },
                valid: {
                    email: '',
                    name: '',
                    password: '',
                    passwordConfirm: ''
                },
                departmentOptions: [
                    { text: '개발팀', value: '1' },
                    { text: '기획팀', value: '2' },
                    { text: '디자인팀', value: '3' }
                ]
            }
        },
        methods: {
            validCheck() {
                this.valid.email = this.joinParams.email ? '' : '필수 입력 항목입니다.';
                this.valid.name = this.joinParams.name ? '' : '필수 입력 항목입니다.';
                this.valid.password = this.joinParams.password ? '' : '필수 입력 항목입니다.';

                if(!this.joinParams.passwordConfirm) {
                    this.valid.passwordConfirm = '필수 입력 항목입니다.';
                } else if(this.joinParams.password !== this.joinParams.passwordConfirm) {
                    this.valid.passwordConfirm = '입력된 비밀번호가 일치하지 않습니다.';
                } else {
                    this.valid.passwordConfirm = '';
                }

                return !this.valid.email 
                    && !this.valid.name 
                    && !this.valid.password 
                    && !this.valid.passwordConfirm;
            },
            onClickJoin() {
                if(this.validCheck()) {
                    alert('회원가입이 완료되었습니다.');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .join-wrap {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .inner-join {
            width: 300px;
            padding-bottom: 50px;
            text-align: center;
            h2 {
                margin-bottom: 20px;
            }
            .input-wrap {
                margin-bottom: 10px;
            }
            .dropdown-wrap {
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