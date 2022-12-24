<!-- 
    [ Pagination Example Component ]
 -->

<template>
    <div class="pagination-exam-wrap">
        <PaginationComp v-model="paginationValue" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ paginationValue }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PaginationExamComp',
        data() {
            return {
                paginationValue: 3
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>