<template>
    <div>
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