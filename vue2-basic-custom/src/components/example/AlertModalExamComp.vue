<!-- 
    [ 메세지 모달 컴포넌트 Example ]
 -->

<template>
    <div class="alert-modal-exam-wrap">

        <!-- Component -->
        <ButtonComp @click="showAlertModal">
            Alert Modal
        </ButtonComp>
    
    </div>
</template>

<script>
    export default {
        name: 'AlertModalExamComp',
        data() {
            return {
                
            }
        },
        methods: {
            showAlertModal() {
                this.$showAlert({
                    title: '알림 메세지',
                    content: '이 메세지는 공통 알림 입니다.'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>