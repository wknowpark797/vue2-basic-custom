<!-- 
    [ Select Component ]
 -->

<template>
    <select v-model="compValue" 
            @change="onChange">
        <option v-for="(select, idx) in options" 
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

</style>