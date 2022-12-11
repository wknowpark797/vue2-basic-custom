<!-- 
    [ Datepicker Component ]

    - TODO : 
        new Date 날짜 데이터 형변환 (filter 사용)
 -->

<template>
    <label>
        {{ label }}
        <input type="date" 
               v-model="compValue"
               :disabled="disabled" 
               :readonly="readonly"
               @input="onInput">
    </label>
</template>

<script>
    export default {
        name: 'DatepickerComp',
        data() {
            return {
                compValue: this.value
            }
        },
        props: {
            value: {
                type: [Date, String],
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: ''
            }
        },
        methods: {
            onInput(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>