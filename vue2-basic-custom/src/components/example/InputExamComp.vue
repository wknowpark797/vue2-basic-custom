<template>
    <div>
        <InputComp 
            v-model="inputValue" 
            :placeholder="'내용 입력'"
            :label="'Label'"
            @focusin="inputFocusin"
            @focusout="inputFocusout" 
            @enter="inputEnter"
            @keyup="inputKeyup" />
        <p>input value : {{ inputValue }}</p>
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