<!-- 
    [ 체크박스 그룹 컴포넌트 Example ]
 -->

<template>
    <div class="check-group-exam-wrap">
        
        <!-- Component -->
        <CheckGroupComp 
            v-model="checkGroupValue"
            :options="checkGroupOptions"
            :errorMsg="errorMsg" />

        <!-- Value -->
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ checkGroupValue }}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CheckGroupExamComp',
        computed: {
            errorMsg() {
                if(this.checkGroupValue.length > 0) {
                    return '';
                } else {
                    return '필수 입력 항목입니다.';
                }
            }
        },
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