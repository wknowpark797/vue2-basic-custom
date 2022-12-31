<!-- 
    [ 셀렉트 컴포넌트 Example ]
 -->

<template>
    <div class="select-exam-wrap">

        <div class="input-wrap">
            <SelectComp 
                v-model="selectValue" 
                :options="selectOptions" />
        </div>

        <div class="input-wrap">
            <SelectComp 
                v-model="selectValue"
                :disabled="true" 
                :options="selectOptions" />
        </div>
        
            
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ selectValue }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectExamComp',
        data() {
            return {
                selectValue: 'option1',
                selectOptions: [
                    { text: 'option1', value: 'option1' },
                    { text: 'option2', value: 'option2' },
                    { text: 'option3', value: 'option3' }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .select-exam-wrap {
        .input-wrap {
            &:not(:first-child) {
                margin-top: 15px;
            }
        }
    }
</style>