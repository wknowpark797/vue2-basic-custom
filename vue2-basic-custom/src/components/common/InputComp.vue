<!-- 
    [ 입력 컴포넌트 ]
 -->

<template>
    <div class="input-default-wrap">

        <input 
            v-model="compValue"
            :id="id"
            :placeholder="placeholder"
            :type="type" 
            :maxlength="maxlength"
            :disabled="disabled"
            :readonly="readonly"
            @input="onInput" 
            @focusin="onFocusin" 
            @focusout="onFocusout" 
            @keyup.enter="onEnter" 
            @keyup="onKeyup">

        <!-- 리셋 버튼 -->
        <button 
            v-if="compValue"
            type="button"
            class="btn-reset"
            @click="onReset">
            <font-awesome-icon icon="circle-xmark" />
        </button>

        <!-- 에러 메세지, 글자수 제한 -->
        <div
            v-if="errorMsg || maxlength" 
            class="sub-wrap">
            <p class="error">
                {{ errorMsg }}
            </p>
            <p
                v-if="maxlength" 
                class="count">
                {{ compValue.length }}/{{ maxlength }}
            </p>
        </div>

    </div>
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
            id: {
                type: String,
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
            maxlength: {
                type: Number,
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            errorMsg: {
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
            },
            onReset(event) {
                this.compValue = '';
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-default-wrap {
        position: relative;
        input {
            width: 100%;
            height: 40px;
            border-radius: 0;
            border: 1px solid $gray-04;
            padding: 0 40px 0 12px;
            box-sizing: border-box;
            outline: none;
            @include body-2;
            &::placeholder {
                color: $gray-05;
            }
            &:disabled {
                opacity: .3;
            }
        }
        .btn-reset {
            position: absolute;
            top: 12px;
            right: 12px;
            cursor: pointer;
            svg {
                height: 16px;
                color: $gray-04;
            }
        }
        .sub-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            @include body-3;
            padding: 0 3px;
            margin-top: 3px;
            .error {
                color: $red-05;
            }
            .count {
                color: $gray-04;
            }
        }
    }
</style>