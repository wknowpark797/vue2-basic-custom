<!-- 
    [ 날짜선택 컴포넌트 ]

    - TODO : 
        new Date 날짜 데이터 형변환 (filter 사용)
 -->

<template>
    <div class="datepicker-wrap">

        <input 
            type="date" 
            v-model="compValue"
            :id="id"
            :disabled="disabled" 
            :readonly="readonly"
            @input="onInput">

    </div>
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
            id: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
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
    .datepicker-wrap {
        input {
            width: 100%;
            height: 40px;
            border-radius: 0;
            border: 1px solid $gray-04;
            padding: 0 12px;
            box-sizing: border-box;
            outline: none;
            @include body-2;
            &:disabled {
                opacity: .3;
            }
        }
    }
</style>