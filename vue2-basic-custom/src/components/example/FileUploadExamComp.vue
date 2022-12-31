<!-- 
    [ File Upload Example Component ]
 -->

<template>
    <div class="file-upload-exam-wrap">

        <!-- Component -->
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