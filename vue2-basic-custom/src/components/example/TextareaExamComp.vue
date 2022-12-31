<!-- 
    [ 여러줄 입력 컴포넌트 Example ]
 -->

<template>
    <div class="textarea-exam-wrap">

        <div class="input-wrap">
            <label for="textarea-label">
                Textarea Label
            </label>
            <TextareaComp 
                v-model="textareaValue"
                :id="'textarea-label'"
                :placeholder="'내용을 입력해 주세요.'"
                :maxlength="300"
                :errorMsg="textareaValue ? '':'필수 입력 항목입니다.'"
                @focusin="inputFocusin"
                @focusout="inputFocusout" 
                @enter="inputEnter"
                @keyup="inputKeyup" />
        </div>

        <div class="input-wrap">
            <label for="textarea-disabled">
                Textarea Disabled
            </label>
            <TextareaComp 
                v-model="textareaValue"
                :id="'textarea-disabled'"
                :placeholder="'내용을 입력해 주세요.'"
                :disabled=true />
        </div>
        
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ textareaValue }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextareaExamComp',
        data() {
            return {
                textareaValue: ''
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
    .textarea-exam-wrap {
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