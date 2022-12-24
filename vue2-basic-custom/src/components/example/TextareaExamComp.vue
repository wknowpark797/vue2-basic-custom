<template>
    <div>
        <TextareaComp 
            v-model="textareaValue"
            :placeholder="'내용 입력'"
            :label="'Label'" />
        <p>textarea value : {{ textareaValue }}</p>
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