<!-- 
    [ Checkbox Group Example Component ]
 -->

<template>
    <div class="check-group-exam-wrap">
        <CheckGroupComp 
            v-model="checkGroupValue"
            :options="checkGroupOptions" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ checkGroupValue }}</p>
        </div>
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