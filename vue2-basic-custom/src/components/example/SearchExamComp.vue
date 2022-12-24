<template>
    <div>
        <SearchComp 
            v-model="searchValue"
            @search="onSearch" />
    </div>
</template>

<script>
    export default {
        name: 'SearchExamComp',
        data() {
            return {
                searchValue: ''
            }
        },
        methods: {
            onSearch() {
                alert(`${this.searchValue} 검색`);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>