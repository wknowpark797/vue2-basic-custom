<!-- 
    [ 체크박스 단일 컴포넌트 ]
 -->

<template>
    <div class="check-single-wrap">

        <label>
            <input 
                type="checkbox" 
                v-model="compValue"
                :true-value="trueValue"
                :false-value="falseValue"
                :disabled="disabled"
                @change="onChange">
            {{ label }}
        </label>

        <!-- 에러 메세지 -->
        <div
            v-if="errorMsg" 
            class="sub-wrap">
            <p class="error">
                {{ errorMsg }}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CheckSingleComp',
        model: {
            prop: 'checked',
            event: 'change'
        },
        data() {
            return {
                compValue: this.checked
            }
        },
        props: {
            checked: {
                type: String,
                default: ''
            },
            trueValue: {
                type: String,
                default: 'Y'
            },
            falseValue: {
                type: String,
                default: 'N'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: ''
            },
            errorMsg: {
                type: String,
                default: ''
            }
        },
        methods: {
            onChange() {
                this.$emit('change', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .check-single-wrap {
        .sub-wrap {
            @include body-3;
            padding: 0 3px;
            margin-top: 3px;
            .error {
                color: $red-05;
            }
        }
    }
</style>