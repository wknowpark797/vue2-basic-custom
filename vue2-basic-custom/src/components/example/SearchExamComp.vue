<!-- 
    [ Search Example Component ]
 -->

<template>
    <div class="search-exam-wrap">
        <SearchComp 
            v-model="searchValue"
            @search="onSearch" />

        <div class="value-box">
            <p class="tit">Value</p>
            <p class="cont">{{ searchValue }}</p>
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