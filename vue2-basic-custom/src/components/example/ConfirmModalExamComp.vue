<!-- 
    [ 메세지 확인 모달 컴포넌트 Example ]
 -->

<template>
    <div class="confirm-modal-exam-wrap">
        <ButtonComp @click="showConfirmModal">
            Confirm Modal
        </ButtonComp>
    </div>
</template>

<script>
    export default {
        name: 'ConfirmModalExamComp',
        data() {
            return {
                
            }
        },
        methods: {
            showConfirmModal() {
                this.$showConfirm({
                    title: '콜백 실행',
                    content: '콜백을 실행 하시겠습니까?',
                    callback: (msg) => {
                        if(msg === 'ok') {
                            alert('콜백 실행');
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>