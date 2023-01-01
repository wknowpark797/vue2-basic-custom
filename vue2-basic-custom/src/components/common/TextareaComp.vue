<!-- 
    [ 여러줄 입력 컴포넌트 ]
 -->

<template>
    <div class="textarea-default-wrap">

        <textarea 
            v-model="compValue"
            :id="id"
            :placeholder="placeholder"
            :rows="rows"
            :maxlength="maxlength"
            :disabled="disabled"
            :readonly="readonly"
            :class="{'no-resize' : noResize}"
            @input="onInput"
            @focusin="onFocusin" 
            @focusout="onFocusout" 
            @keyup.enter="onEnter" 
            @keyup="onKeyup" />

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
            id: {
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
            noResize: {
                type: Boolean,
                default: true
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .textarea-default-wrap {
        textarea {
            width: 100%;
            border-radius: 0;
            border: 1px solid $gray-04;
            padding: 12px;
            box-sizing: border-box;
            outline: none;
            @include body-2;
            &::placeholder {
                color: $gray-05;
            }
            &:disabled {
                opacity: .3;
            }
            &.no-resize {
                resize: none;
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