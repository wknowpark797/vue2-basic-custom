<!-- 
    [ Rating Example Component ]
 -->

<template>
    <div class="rating-exam-wrap">
        <RatingComp v-model="rateValue" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ rateValue }}</p>
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