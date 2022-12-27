<!-- 
    [ Join Component ]
 -->

<template>
    <div class="join-wrap">

        <!-- Home Button -->
        <button 
            type="button" 
            class="btn-home"
            @click="$router.push('/')">
            <font-awesome-icon icon="house" />
        </button>

        <div class="inner-join">

            <h2>Join</h2>

            <!-- 이메일 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.email" 
                    :placeholder="'이메일을 입력해주세요.'" />
            </div>

            <!-- 이름 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.name" 
                    :placeholder="'이름을 입력해주세요.'" />
            </div>

            <!-- 부서 -->
            <div class="dropdown-wrap">
                <DropdownComp 
                    v-model="inputParams.department" 
                    :options="departmentOptions" />
            </div>

            <!-- 비밀번호 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.password" 
                    :placeholder="'비밀번호를 입력해주세요.'" />
            </div>

            <!-- 비밀번호 확인 -->
            <div class="input-wrap">
                <InputComp 
                    v-model="inputParams.passwordConfirm" 
                    :placeholder="'비밀번호를 한번 더 입력해주세요.'" />
            </div>

            <div class="btn-wrap">
                <ButtonComp class="btn-join">
                    회원가입
                </ButtonComp>
                <ButtonComp 
                    class="btn-login" 
                    :color="'black'"
                    :textButton="true"
                    @click="$router.push('/login')">
                    로그인
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
                inputParams: {
                    email: '',
                    name: '',
                    department: '1',
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
            
        }
    }
</script>

<style lang="scss" scoped>
    .join-wrap {
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
                text-align: right;
                .btn-join {
                    width: 100%;
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>