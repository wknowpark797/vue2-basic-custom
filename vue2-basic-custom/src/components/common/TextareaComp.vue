<!-- 
    [ Textarea Component ]

    - TODO : 
        유효성 검사 (에러 메세지 / 성공 메세지) 추가
        글자수 노출 추가
 -->

<template>
    <label>
        {{ label }}
        <textarea v-model="compValue"
                  :placeholder="placeholder"
                  :cols="cols" 
                  :rows="rows"
                  :disabled="disabled"
                  :readonly="readonly"
                  @input="onInput" />
    </label>
</template>

<script>
    export default {
        name: 'TextareaComp',
        data() {
            return {
                compValue: this.value
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            cols: {
                type: Number,
                default: 50
            },
            rows: {
                type: Number,
                default: 5
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