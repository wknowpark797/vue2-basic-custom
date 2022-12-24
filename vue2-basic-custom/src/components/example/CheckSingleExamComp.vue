<!-- 
    [ Checkbox Single Example Component ]
 -->

<template>
    <div class="check-single-exam-wrap">
        <CheckSingleComp 
            v-model="checkSingleValue"
            :label="'Label'" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ checkSingleValue }}</p>
        </div>
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