<template>
    <div>
        <CheckGroupComp 
            v-model="checkGroupValue"
            :options="checkGroupOptions" />
        <p>checkbox value : {{ checkGroupValue }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CheckGroupExamComp',
        data() {
            return {
                checkGroupValue: [],
                checkGroupOptions: [
                    { label: 'test1', value: 'test1' },
                    { label: 'test2', value: 'test2' },
                    { label: 'test3', value: 'test3' },
                    { label: 'test4', value: 'test4' },
                    { label: 'test5', value: 'test5' }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>