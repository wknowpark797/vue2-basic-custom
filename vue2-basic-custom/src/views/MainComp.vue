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
                            :textButton="true">
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

            <ul class="list-comments-main">
                <li 
                    v-for="comment in commentsList"
                    :key="comment.seq">
                    <router-link 
                        :to="''" 
                        :class="{'new':!comment.confirm}">
                        <p class="content">{{ comment.content }}</p>
                        <div class="bottom-wrap">
                            <p class="name">{{ comment.name }} [{{ comment.department }}]</p>
                            <p class="date">{{ comment.date }}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
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
                listComp: [],
                commentsList: [
                    {
                        seq: '1',
                        name: '김이름',
                        department: '개발팀',
                        content: '댓글 내용',
                        date: '2022.12.25',
                        confirm: true
                    },
                    {
                        seq: '2',
                        name: '김이름',
                        department: '기획팀',
                        content: '댓글 내용',
                        date: '2022.12.25',
                        confirm: false
                    },
                    {
                        seq: '3',
                        name: '김이름',
                        department: '개발팀',
                        content: '댓글 내용',
                        date: '2022.12.25',
                        confirm: false
                    },
                    {
                        seq: '4',
                        name: '김이름',
                        department: '기획팀',
                        content: '댓글 내용',
                        date: '2022.12.25',
                        confirm: true
                    },
                    {
                        seq: '5',
                        name: '김이름',
                        department: '기획팀',
                        content: '댓글 내용',
                        date: '2022.12.25',
                        confirm: true
                    },
                    {
                        seq: '6',
                        name: '김이름',
                        department: '기획팀',
                        content: '댓글 내용',
                        date: '2022.12.25',
                        confirm: true
                    },
                    {
                        seq: '7',
                        name: '김이름',
                        department: '기획팀',
                        content: '댓글 내용',
                        date: '2022.12.25',
                        confirm: true
                    }
                ]
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
            height: calc(100vh - 160px);
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
        .list-comments-main {
            height: calc(100vh - 111px);
            overflow-y: auto;
            > li {
                &:not(:first-child) {
                    margin-top: 15px;
                }
                > a {
                    display: block;
                    border: 1px solid #9e9e9e;
                    padding: 15px;
                    color: #333;
                    &.new {
                        background: #dcdcdc;
                    }
                    .bottom-wrap {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 15px;
                    }
                }
            }
        }
    }
</style>
