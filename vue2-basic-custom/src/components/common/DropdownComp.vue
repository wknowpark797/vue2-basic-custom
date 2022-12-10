<!-- 
    [ Dropdown Component ]
 -->

<template>
    <div class="dropdown-wrap">
        <p>{{ showText }}</p>

        <ul class="list-option">
            <li v-for="(option, idx) in options" 
                :key="idx" 
                @click="onClick(option.value)">
                {{ option.text }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'DropdownComp',
        model: {
            prop: 'value',
            event: 'click'
        },
        data() {
            return {
                compValue: this.value
            }
        },
        computed: {
            showText() {
                const array = this.options.filter(item => item.value === this.compValue);
                return array[0].text;
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
            onClick(value) {
                this.compValue = value;
                this.$emit('click', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>