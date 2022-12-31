<!-- 
    [ 별점 컴포넌트 Example ]
 -->

<template>
    <div class="rating-exam-wrap">
        <RatingComp v-model="rateValue" />

        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ rateValue }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RatingExamComp',
        data() {
            return {
                rateValue: 3
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>