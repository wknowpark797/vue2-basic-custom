<template>
    <div>
        <RatingComp v-model="rateValue" />
        <p>rating value : {{ rateValue }}</p>
    </div>
</template>

<script>
    export default {
        name: 'RatingExamComp',
        data() {
            return {
                rateValue: 3
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>