<!-- 
    [ Main Component - component list ]
 -->

<template>
    <div class="main-wrap">

        <!-- Components -->
        <div class="group-box">
            <div class="title-wrap">
                <h2>Components</h2>
                <ButtonComp :color="'black'"
                            :textButton="true"
                            @click="$router.push('/dev/document')">
                    모두보기
                </ButtonComp>
            </div>

            <!-- Search Wrap -->
            <SearchComp v-model="searchValue"
                        @search="onSearch" />

            <!-- Component List -->
            <div class="component-wrap">
                <router-link v-for="item in listComp"
                            :key="item.seq"
                            :to="`/detail/${item.seq}`">
                    {{ item.name }}
                </router-link>
            </div>
        </div>

        <!-- Comments -->
        <div class="group-box">
            <div class="title-wrap">
                <h2>Comments</h2>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'MainComp',
        data() {
            return {
                searchValue: '',
                listComp: [
                    { seq: 1, name: 'Modal Component' },
                    { seq: 2, name: 'Alert Modal Component' },
                    { seq: 3, name: 'Confirm Modal Component' },
                    { seq: 4, name: 'Toast Component' },
                    { seq: 5, name: 'Loading Component' },
                    { seq: 6, name: 'Input Component' },
                    { seq: 7, name: 'Textarea Component' },
                    { seq: 8, name: 'Check Group Component' },
                    { seq: 9, name: 'Check Single Component' },
                    { seq: 10, name: 'Radio Component' },
                    { seq: 11, name: 'Switch Component' },
                    { seq: 12, name: 'Select Component' },
                    { seq: 13, name: 'Dropdown Component' },
                    { seq: 14, name: 'Datepicker Component' },
                    { seq: 15, name: 'Timepicker Component' },
                    { seq: 16, name: 'File Upload Component' },
                    { seq: 17, name: 'Button Component' },
                    { seq: 18, name: 'Accordion Component' },
                    { seq: 19, name: 'Avatar Component' },
                    { seq: 20, name: 'Count Component' },
                    { seq: 21, name: 'Pagination Component' },
                    { seq: 22, name: 'Rating Component' },
                    { seq: 23, name: 'Tabs Component' },
                    { seq: 24, name: 'Tags Component' },
                    { seq: 25, name: 'Scroll Top Component' }
                ]
            }
        },
        mounted() {
            
        },
        methods: {
            onSearch() {
                alert(`${this.searchValue} 검색`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-wrap {
        display: flex;
        .group-box {
            flex: 1;
            &:not(:first-child) {
                margin-left: 20px;
            }
        }
        .title-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        .component-wrap {
            margin-top: 15px;
            height: calc(100vh - 139px);
            overflow-y: auto;
            > a {
                display: block;
                color: #fff;
                background: #9e9e9e;
                padding: 10px;
                &:not(:first-child) {
                    margin-top: 10px;
                }
            }
        }
    }
</style>
