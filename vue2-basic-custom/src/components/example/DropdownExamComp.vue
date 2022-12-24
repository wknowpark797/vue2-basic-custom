<template>
    <div>
        <DropdownComp 
            v-model="dropdownValue" 
            :options="dropdownOptions" />
        <p>dropdown value : {{ dropdownValue }}</p>
    </div>
</template>

<script>
    export default {
        name: 'DropdownExamComp',
        data() {
            return {
                dropdownValue: '1',
                dropdownOptions: [
                    { text: 'option1', value: '1' },
                    { text: 'option2', value: '2' },
                    { text: 'option3', value: '3' }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>