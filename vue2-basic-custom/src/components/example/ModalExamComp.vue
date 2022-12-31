<!-- 
    [ 모달 컴포넌트 Example ]
 -->

<template>
    <div class="modal-exam-wrap">
        <ButtonComp 
            :color="'black'" 
            @click="showCommonModal">
            Show Modal
        </ButtonComp>

        <ModalComp ref="commonModal">
            <template v-slot:title>
                Modal Title
            </template>

            <template v-slot:body>
                Modal Body
            </template>

            <template v-slot:footer>
                Modal Footer
            </template>
        </ModalComp>
    </div>
</template>

<script>
    export default {
        name: 'ModalExamComp',
        data() {
            return {
                
            }
        },
        methods: {
            showCommonModal() {
                this.$refs.commonModal.show();
            },
            closeCommonModal() {
                this.$refs.commonModal.close();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>