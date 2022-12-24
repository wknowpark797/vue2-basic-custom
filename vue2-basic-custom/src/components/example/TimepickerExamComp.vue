<template>
    <div>
        <TimepickerComp 
            v-model="timepickerValue"
            :label="'시간 선택'" />
        <p>timepicker value : {{ timepickerValue }}</p>
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