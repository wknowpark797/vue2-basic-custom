<!-- 
    [ 사이드바 > 프로필 이미지 수정 모달 ]
 -->

<template>
    <ModalComp 
        ref="profileImgUpdateModal"
        class="profile-img-update-modal">
        <template v-slot:title>
            프로필 이미지 수정
        </template>

        <template v-slot:body>
            <div class="inner-modal">
                <div class="upload-wrap">
                    <FileUploadComp v-model="imgUploadValue" />
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
        name: 'ProfileImgUpdateModal',
        data() {
            return {
                imgUploadValue: null
            }
        },
        methods: {
            show() {
                this.$refs.profileImgUpdateModal.show();
                this.$emit('show');
            },
            close() {
                this.$refs.profileImgUpdateModal.close();
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .profile-img-update-modal {
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