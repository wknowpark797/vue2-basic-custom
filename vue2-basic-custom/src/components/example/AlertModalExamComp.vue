<template>
    <div>
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