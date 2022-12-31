<!-- 
    [ 파일 업로드 컴포넌트 Example ]
 -->

<template>
    <div class="file-upload-exam-wrap">

        <!-- Component -->
        <FileUploadComp 
            v-model="fileUploadValue"
            :errorMsg="errorMsg" />
    
    </div>
</template>

<script>
    export default {
        name: 'FileUploadExamComp',
        computed: {
            errorMsg() {
                if(this.fileUploadValue && this.fileUploadValue.length > 0) {
                    return '';
                } else {
                    return '필수 선택 항목입니다.';
                }
            }
        },
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