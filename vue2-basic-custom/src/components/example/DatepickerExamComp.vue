<!-- 
    [ 날짜선택 컴포넌트 Example ]
 -->

<template>
    <div class="datepicker-exam-wrap">

        <div class="input-wrap">
            <label for="datepicker-label">
                Datepicker Label
            </label>
            <DatepickerComp 
                v-model="datepickerValue"
                :id="'datepicker-label'" />
        </div>

        <div class="input-wrap">
            <label for="datepicker-disabled">
                Datepicker Disabled
            </label>
            <DatepickerComp 
                v-model="datepickerValue"
                :id="'datepicker-disabled'"
                :disabled="true" />
        </div>
        
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ datepickerValue }}
            </p>
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
    .datepicker-exam-wrap {
        .input-wrap {
            &:not(:first-child) {
                margin-top: 15px;
            }
        }
        label {
            display: inline-block;
            margin-bottom: 10px;
        }
    }
</style>