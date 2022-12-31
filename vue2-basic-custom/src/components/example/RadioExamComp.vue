<!-- 
    [ 라디오 컴포넌트 Example ]
 -->

<template>
    <div class="radio-exam-wrap">

        <!-- Component -->
        <RadioComp 
            v-model="radioValue" 
            :options="radioOptions"
            :errorMsg="errorMsg" />

        <!-- Value -->
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ radioValue }}
            </p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'RadioExamComp',
        computed: {
            errorMsg() {
                if(this.radioValue) {
                    return '';
                } else {
                    return '필수 선택 항목입니다.';
                }
            }
        },
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