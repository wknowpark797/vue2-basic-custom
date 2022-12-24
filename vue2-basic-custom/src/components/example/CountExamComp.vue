<!-- 
    [ Count Example Component ]
 -->

<template>
    <div class="count-exam-wrap">
        <CountComp v-model="countValue" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ countValue }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CountExamComp',
        data() {
            return {
                countValue: 0
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>