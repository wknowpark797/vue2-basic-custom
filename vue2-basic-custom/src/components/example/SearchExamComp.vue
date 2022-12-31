<!-- 
    [ 검색 컴포넌트 Example ]
 -->

<template>
    <div class="search-exam-wrap">

        <!-- Component -->
        <SearchComp 
            v-model="searchValue"
            @search="onSearch" />

        <!-- Value -->
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ searchValue }}
            </p>
        </div>
        
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