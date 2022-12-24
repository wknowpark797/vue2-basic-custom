<!-- 
    [ Select Example Component ]
 -->

<template>
    <div class="select-exam-wrap">
        <SelectComp 
            v-model="selectValue" 
            :options="selectOptions" />
            
        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ selectValue }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectExamComp',
        data() {
            return {
                selectValue: 'option1',
                selectOptions: [
                    { text: 'option1', value: 'option1' },
                    { text: 'option2', value: 'option2' },
                    { text: 'option3', value: 'option3' }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>