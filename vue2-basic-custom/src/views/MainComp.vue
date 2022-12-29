<!-- 
    [ 메인 화면 ]
 -->

<template>
    <div class="main-wrap">

        <!-- 컴포넌트 -->
        <div class="group-box">
            <div class="title-wrap">
                <h2>컴포넌트</h2>
                <ButtonComp 
                    :color="'blue'"
                    :textButton="true"
                    @click="$router.push('/all-view')">
                    모두보기
                </ButtonComp>
            </div>

            <!-- 검색 -->
            <SearchComp 
                v-model="searchValue"
                @search="onSearch" />

            <!-- 컴포넌트 목록 -->
            <div class="components-wrap">
                <router-link 
                    v-for="comp in componentsList"
                    :key="comp.seq"
                    :to="`/detail/${comp.seq}`">
                    {{ comp.name }}
                </router-link>
            </div>
        </div>

        <!-- 전체 댓글 -->
        <div class="group-box">
            <div class="title-wrap">
                <h2>전체 댓글</h2>
            </div>

            <ul class="list-comments-main">
                <li 
                    v-for="comment in commentsList"
                    :key="comment.seq">
                    <router-link 
                        :to="''" 
                        :class="{'new' : !comment.confirm}">
                        <p class="content">{{ comment.content }}</p>
                        <div class="bottom-wrap">
                            <p class="name">
                                {{ comment.name }} 
                                [{{ comment.department }}]
                            </p>
                            <p class="date">{{ comment.date }}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import componentsList from '@/data/componentsList';
    import commentsList from '@/data/commentsList';

    export default {
        name: 'MainComp',
        data() {
            return {
                searchValue: '',
                componentsList: [],
                commentsList: []
            }
        },
        methods: {
            onSearch() {
                alert(`${this.searchValue} 검색`);
            }
        },
        mounted() {
            this.componentsList = componentsList;
            this.commentsList = commentsList;
        }
    }
</script>

<style lang="scss" scoped>
    .main-wrap {
        display: flex;
        align-items: flex-start;
        .group-box {
            flex: 1;
            &:not(:first-child) {
                margin-left: 50px;
            }
        }
        .title-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        .components-wrap {
            margin-top: 15px;
            height: calc(100vh - 176px);
            overflow-y: auto;
            > a {
                display: block;
                color: #FFF;
                background: $gray-04;
                padding: 17px;
                &:not(:first-child) {
                    margin-top: 10px;
                }
                &:hover {
                    background: $gray-03;
                }
            }
        }
        .list-comments-main {
            height: calc(100vh - 121px);
            overflow-y: auto;
            > li {
                &:not(:first-child) {
                    margin-top: 15px;
                }
                > a {
                    display: block;
                    border: 1px solid $gray-05;
                    padding: 15px;
                    color: $gray-01;
                    &.new {
                        background: $gray-05;
                    }
                    &:hover {
                        background: $gray-07;
                    }
                    .bottom-wrap {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 15px;
                        @include body-2;
                    }
                }
            }
        }
    }
</style>


