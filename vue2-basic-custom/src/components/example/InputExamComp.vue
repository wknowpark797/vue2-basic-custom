<!-- 
    [ 입력 컴포넌트 Example ]
 -->

<template>
    <div class="input-exam-wrap">

        <div class="input-wrap">
            <label for="input-label">
                Input Label
            </label>
            <InputComp 
                v-model="inputValue" 
                :id="'input-label'"
                :placeholder="'내용을 입력해 주세요.'"
                :maxlength="100"
                :errorMsg="inputValue ? '':'필수 입력 항목입니다.'"
                @focusin="inputFocusin"
                @focusout="inputFocusout" 
                @enter="inputEnter"
                @keyup="inputKeyup" />
        </div>

        <div class="input-wrap">
            <label for="input-disabled">
                Input Disabled
            </label>
            <InputComp 
                v-model="inputValue" 
                :id="'input-disabled'"
                :placeholder="'내용을 입력해 주세요.'"
                :disabled=true />
        </div>
        
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ inputValue }}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'InputExamComp',
        data() {
            return {
                inputValue: ''
            }
        },
        methods: {
            inputFocusin() {
                
            },
            inputFocusout() {
                
            },
            inputEnter() {
                
            },
            inputKeyup() {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-exam-wrap {
        .input-wrap {
            &:not(:first-child) {
                margin-top: 15px;
            }
        }
        label {
            display: inline-block;
            margin-bottom: 10px;
        }
    }
</style>