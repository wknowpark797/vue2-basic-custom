<!-- 
    [ Input Component ]

    - TODO : 
        reset button 만들기
        유효성 검사 (에러 메세지 / 성공 메세지) 추가
 -->

<template>
    <label>
        {{ label }}
        <input v-model="compValue"
               :placeholder="placeholder"
               :type="type" 
               :disabled="disabled"
               :readonly="readonly"
               @input="onInput" 
               @focusin="onFocusin" 
               @focusout="onFocusout" 
               @keyup.enter="onEnter" 
               @keyup="onKeyup">
    </label>
</template>

<script>
    export default {
        name: 'InputComp',
        data() {
            return {
                compValue: this.value
            }
        },
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text',
                description: 'text | number | password'
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
            },
            onFocusin() {
                this.$emit('focusin');
            },
            onFocusout() {
                this.$emit('focusout');
            },
            onEnter() {
                this.$emit('enter');
            },
            onKeyup(event) {
                this.$emit('keyup', event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    label {
        display: flex;
        align-items: center;
        input {
            flex: 1;
            height: 34px;
            border-radius: 0;
            border: 1px solid #333;
            box-sizing: border-box;
        }
    }
</style>