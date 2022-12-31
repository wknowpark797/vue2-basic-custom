<!-- 
    [ 카운트 컴포넌트 Example ]
 -->

<template>
    <div class="count-exam-wrap">

        <CountComp v-model="countValue" />

        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ countValue }}
            </p>
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