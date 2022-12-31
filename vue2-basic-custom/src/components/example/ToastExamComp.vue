<!-- 
    [ 토스트 컴포넌트 Example ]
 -->

<template>
    <div class="toast-exam-wrap">
        <ButtonComp @click="showToast">
            Toast
        </ButtonComp>
    </div>
</template>

<script>
    export default {
        name: 'ToastExamComp',
        data() {
            return {
                
            }
        },
        methods: {
            showToast() {
                this.$showToast({
                    type: 'success',
                    content: 'success 3초'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>