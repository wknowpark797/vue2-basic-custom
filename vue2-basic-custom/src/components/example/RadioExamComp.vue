<!-- 
    [ Radio Example Component ]
 -->

<template>
    <div class="radio-exam-wrap">
        <RadioComp 
            v-model="radioValue" 
            :options="radioOptions" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ radioValue }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RadioExamComp',
        data() {
            return {
                radioValue: '',
                radioOptions: [
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