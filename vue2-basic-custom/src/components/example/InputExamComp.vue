<!-- 
    [ Input Example Component ]
 -->

<template>
    <div class="input-exam-wrap">
        <InputComp 
            v-model="inputValue" 
            :placeholder="'내용 입력'"
            :label="'Label'"
            @focusin="inputFocusin"
            @focusout="inputFocusout" 
            @enter="inputEnter"
            @keyup="inputKeyup" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ inputValue }}</p>
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
                console.log('input focusin');
            },
            inputFocusout() {
                console.log('input focusout');
            },
            inputEnter() {
                console.log('input enter');
            },
            inputKeyup(value) {
                console.log('keyup value : ', value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>