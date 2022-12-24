<!-- 
    [ Textarea Example Component ]
 -->

<template>
    <div class="textarea-exam-wrap">
        <TextareaComp 
            v-model="textareaValue"
            :placeholder="'내용 입력'"
            :label="'Label'" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ textareaValue }}</p>
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
            
        }
    }
</script>

<style lang="scss" scoped>

</style>