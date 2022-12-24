<template>
    <div>
        <FileUploadComp v-model="fileUploadValue" />
    </div>
</template>

<script>
    export default {
        name: 'FileUploadExamComp',
        data() {
            return {
                fileUploadValue: null
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>