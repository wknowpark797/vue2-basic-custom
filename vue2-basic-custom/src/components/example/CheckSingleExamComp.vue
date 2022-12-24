<template>
    <div>
        <CheckSingleComp 
            v-model="checkSingleValue"
            :label="'Label'" />
        <p>checkbox value : {{ checkSingleValue }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CheckSingleExamComp',
        data() {
            return {
                checkSingleValue: 'N'
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>