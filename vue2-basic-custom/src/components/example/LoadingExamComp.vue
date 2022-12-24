<template>
    <div>
        <ButtonComp @click="showLoading">
            Loading
        </ButtonComp>
    </div>
</template>

<script>
    export default {
        name: 'LoadingExamComp',
        data() {
            return {
                
            }
        },
        methods: {
            showLoading() {
                this.$showLoading();
                setTimeout(() => {
                    this.$hideLoading();
                }, 2000)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>