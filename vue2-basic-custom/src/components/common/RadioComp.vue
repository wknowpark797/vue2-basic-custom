<!-- 
    [ Radio Component ]
 -->

<template>
    <div class="radio-wrap">
        
        <label v-for="(pick, idx) in options" 
               :key="idx">
            <input type="radio" 
                   v-model="compValue"
                   :value="pick.value"
                   @change="onChange">
            {{ pick.label }}
        </label>

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
    }
</style>