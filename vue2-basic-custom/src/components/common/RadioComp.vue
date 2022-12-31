<!-- 
    [ 라디오 컴포넌트 ]
 -->

<template>
    <div class="radio-wrap">
        
        <label 
            v-for="(pick, idx) in options" 
            :key="idx">
            <input 
                type="radio" 
                v-model="compValue"
                :value="pick.value"
                @change="onChange">
            {{ pick.label }}
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
        name: 'RadioComp',
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
            options: {
                type: Array,
                default: () => []
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
    .radio-wrap {
        label {
            display: block;
        }
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