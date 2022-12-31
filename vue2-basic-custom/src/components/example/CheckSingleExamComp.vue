<!-- 
    [ 체크박스 단일 컴포넌트 Example ]
 -->

<template>
    <div class="check-single-exam-wrap">

        <CheckSingleComp 
            v-model="checkSingleValue"
            :label="'Label'"
            :errorMsg="checkSingleValue === 'Y' ? '':'항목 체크는 필수입니다.'" />

        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ checkSingleValue }}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CheckSingleExamComp',
        data() {
            return {
                checkSingleValue: 'N'
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>