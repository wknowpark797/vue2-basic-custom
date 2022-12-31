<!-- 
    [ 페이지네이션 컴포넌트 Example ]
 -->

<template>
    <div class="pagination-exam-wrap">

        <!-- Component -->
        <PaginationComp v-model="paginationValue" />

        <!-- Value -->
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ paginationValue }}
            </p>
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