<!-- 
    [ Switch Example Component ]
 -->

<template>
    <div class="switch-exam-wrap">
        <SwitchComp v-model="switchValue" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ switchValue }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SwitchExamComp',
        data() {
            return {
                switchValue: false
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>