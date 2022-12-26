<!-- 
    [ 사이드바 > 프로필 수정 모달 ]
 -->

<template>
    <ModalComp 
        ref="profileUpdateModal" 
        class="profile-update-modal">
        <template v-slot:title>
            프로필 수정
        </template>

        <template v-slot:body>
            <div class="inner-modal">
                <div class="input-wrap">
                    <InputComp 
                        v-model="updateParams.name" 
                        :placeholder="'이름을 입력해주세요.'" />
                </div>
                <div class="dropdown-wrap">
                    <DropdownComp 
                        v-model="updateParams.department" 
                        :options="departmentOptions" />
                </div>
                <div class="input-wrap">
                    <InputComp 
                        v-model="updateParams.email" 
                        :placeholder="'이메일을 입력해주세요.'" />
                </div>
            </div>
        </template>

        <template v-slot:footer>
            <div class="btn-wrap">
                <ButtonComp @click="close">
                    취소
                </ButtonComp>
                <ButtonComp>
                    수정
                </ButtonComp>
            </div>
        </template>
    </ModalComp>
</template>

<script>
    export default {
        name: 'ProfileUpdateModal',
        data() {
            return {
                updateParams: {
                    name: '',
                    department: '1',
                    email: ''
                },
                departmentOptions: [
                    { text: '개발팀', value: '1' },
                    { text: '기획팀', value: '2' },
                    { text: '디자인팀', value: '3' }
                ]
            }
        },
        methods: {
            show() {
                this.$refs.profileUpdateModal.show();
                this.$emit('show');
            },
            close() {
                this.$refs.profileUpdateModal.close();
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .profile-update-modal {
        .inner-modal {
            > div {
                &:not(:first-child) {
                    margin-top: 15px;
                }
            }
        }
        .btn-wrap {
            text-align: right;
            button {
                &:not(:first-child) {
                    margin-left: 10px;
                }
            }
        }
    }
</style>