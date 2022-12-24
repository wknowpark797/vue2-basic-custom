<!-- 
    [ Timepicker Example Component ]
 -->

<template>
    <div class="timepicker-exam-wrap">
        <TimepickerComp 
            v-model="timepickerValue"
            :label="'시간 선택'" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ timepickerValue }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TimepickerExamComp',
        data() {
            return {
                timepickerValue: '19:00'
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>