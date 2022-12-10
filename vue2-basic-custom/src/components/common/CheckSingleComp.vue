<!-- 
    [ Checkbox Single Component ]
 -->

<template>
    <label>
        <input type="checkbox" 
               v-model="compValue"
               :true-value="trueValue"
               :false-value="falseValue"
               :disabled="disabled"
               @change="onChange">
        {{ label }}
    </label>
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

</style>