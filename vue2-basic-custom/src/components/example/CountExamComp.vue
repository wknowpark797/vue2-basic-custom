<template>
    <div>
        <CountComp v-model="countValue" />
        <p>count value : {{ countValue }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CountExamComp',
        data() {
            return {
                countValue: 0
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>