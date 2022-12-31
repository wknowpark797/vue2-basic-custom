<!-- 
    [ 셀렉트 컴포넌트 ]
 -->

<template>
    <select 
        v-model="compValue"
        :disabled="disabled" 
        @change="onChange">
        <option 
            v-for="(select, idx) in options" 
            :key="idx"
            :value="select.value">
            {{ select.text }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'SelectComp',
        model: {
            prop: 'value',
            event: 'change'
        },
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
            disabled: {
                type: Boolean,
                default: false
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onChange(event) {
                this.$emit('change', event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    select {
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
</style>