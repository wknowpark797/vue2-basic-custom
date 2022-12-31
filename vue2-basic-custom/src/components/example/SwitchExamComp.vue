<!-- 
    [ 스위치 컴포넌트 Example ]
 -->

<template>
    <div class="switch-exam-wrap">

        <!-- Component -->
        <SwitchComp v-model="switchValue" />

        <!-- Value -->
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ switchValue }}
            </p>
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