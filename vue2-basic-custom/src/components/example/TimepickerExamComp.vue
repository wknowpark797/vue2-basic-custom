<!-- 
    [ 시간선택 컴포넌트 Example ]
 -->

<template>
    <div class="timepicker-exam-wrap">

        <div class="input-wrap">
            <label for="timepicker-label">
                Timepicker Label
            </label>
            <TimepickerComp 
                v-model="timepickerValue"
                :id="'timepicker-label'" />
        </div>

        <div class="input-wrap">
            <label for="timepicker-disabled">
                Timepicker Disabled
            </label>
            <TimepickerComp 
                v-model="timepickerValue"
                :id="'timepicker-disabled'"
                :disabled="true" />
        </div>
        
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ timepickerValue }}
            </p>
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
    .timepicker-exam-wrap {
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