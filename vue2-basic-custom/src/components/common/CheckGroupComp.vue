<!-- 
    [ Checkbox Group Component ]

    - TODO : 
        배열 값 정렬하기
 -->

<template>
    <div class="check-group-wrap">
        
        <label>
            <input type="checkbox" 
                   v-model="allChecked" 
                   @change="onToggleAll">
            All
        </label>

        <label v-for="(check, idx) in options" 
               :key="idx">
            <input type="checkbox"
                   v-model="compValue" 
                   :value="check.value"
                   @change="onChange">
            {{ check.label }}
        </label>

    </div>
</template>

<script>
    export default {
        name: 'CheckGroupComp',
        model: {
            prop: 'checked',
            event: 'change'
        },
        data() {
            return {
                compValue: this.checked,
                allChecked: false
            }
        },
        props: {
            checked: {
                type: Array,
                default: () => []
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onToggleAll() {

                if(this.allChecked) {
                    const newValue = [];
                    this.options.forEach(item => {
                        newValue.push(item.value);
                    })
                    this.compValue = newValue;
                } else {
                    this.compValue = [];
                }

                this.$emit('change', this.compValue);
                
            },
            onChange() {
                this.allChecked = this.compValue.length === this.options.length;
                this.$emit('change', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>