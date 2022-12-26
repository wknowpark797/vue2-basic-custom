<!-- 
    [ Textarea Component ]

    - TODO : 
        유효성 검사 (에러 메세지 / 성공 메세지) 추가
        글자수 노출 추가
 -->

<template>
    <label>
        <span v-if="label">{{ label }}</span>
        <textarea v-model="compValue"
                  :placeholder="placeholder"
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
    label {
        span {
            display: inline-block;
            margin-bottom: 10px;
        }
        textarea {
            width: 100%;
            border-radius: 0;
            border: 1px solid $gray-01;
            padding: 7px;
            box-sizing: border-box;
            outline: none;
            @include body-1;
            &::placeholder {
                color: $gray-05;
            }
        }
    }
</style>