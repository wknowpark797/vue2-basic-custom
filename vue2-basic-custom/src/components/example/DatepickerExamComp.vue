<template>
    <div>
        <DatepickerComp 
            v-model="datepickerValue"
            :label="'날짜 선택'" />
        <p>datepicker value : {{ datepickerValue }}</p>
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