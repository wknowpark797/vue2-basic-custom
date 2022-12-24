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
    import componentList from '@/data/componentList';

    export default {
        name: 'MainComp',
        data() {
            return {
                searchValue: '',
                listComp: []
            }
        },
        methods: {
            onSearch() {
                alert(`${this.searchValue} 검색`);
            }
        },
        mounted() {
            this.listComp = componentList;
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
