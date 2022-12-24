<template>
    <div>
        <SelectComp 
            v-model="selectValue" 
            :options="selectOptions" />
        <p>select value : {{ selectValue }}</p>
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