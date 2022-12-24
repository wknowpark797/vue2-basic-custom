<!-- 
    [ Datepicker Example Component ]
 -->

<template>
    <div class="datepicker-exam-wrap">
        <DatepickerComp 
            v-model="datepickerValue"
            :label="'날짜 선택'" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ datepickerValue }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DatepickerExamComp',
        data() {
            return {
                datepickerValue: '2022-12-01'
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>