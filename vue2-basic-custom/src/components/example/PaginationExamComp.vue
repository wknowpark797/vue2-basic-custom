<template>
    <div>
        <PaginationComp v-model="paginationValue" />
        <p>pagination value : {{ paginationValue }}</p>
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