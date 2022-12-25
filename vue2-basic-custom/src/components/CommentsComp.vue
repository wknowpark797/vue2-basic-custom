<!-- 
    [ Comments Component ]
 -->

<template>
    <div class="comments-wrap">

        <!-- Comments List -->
        <ul class="list-comments">
            <li 
                v-for="comment in commentsList"
                :key="comment.seq">

                <!-- 프로필 -->
                <div class="profile-wrap">
                    <AvatarComp :text="'Ara'" />
                </div>

                <!-- 댓글 정보 -->
                <div class="info-wrap">
                    <p class="name">
                        {{ comment.name }}
                        <span>[{{ comment.department }}]</span>
                    </p>
                    <p class="content">{{ comment.content }}</p>
                    <div class="bottom-wrap">
                        <p class="date">{{ comment.date }}</p>
                        <div class="btn-wrap">
                            <ButtonComp>
                                수정
                            </ButtonComp>
                            <ButtonComp>
                                삭제
                            </ButtonComp>
                        </div>
                    </div>
                </div>

            </li>
        </ul>

        <!-- Comment Input -->
        <div class="input-comment">
            <!-- 프로필 -->
            <div class="profile-wrap">
                <AvatarComp :text="'Ara'" />
            </div>

            <!-- 댓글 정보 -->
            <div class="info-wrap">
                <p class="name">
                    {{ userInfo.name }}
                    <span>[{{ userInfo.department }}]</span>
                </p>
                <div class="input-wrap">
                    <TextareaComp 
                        v-model="userInfo.content"
                        :placeholder="'내용 입력'" />
                </div>
                <div class="bottom-wrap">
                    <p class="date">{{ userInfo.date }}</p>
                    <div class="btn-wrap">
                        <ButtonComp>
                            등록
                        </ButtonComp>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommentsComp',
        data() {
            return {
                commentsList: [
                    {
                        seq: '1',
                        name: '김이름',
                        department: '개발팀',
                        content: '댓글 내용',
                        date: '2022.12.25'
                    },
                    {
                        seq: '2',
                        name: '김이름',
                        department: '기획팀',
                        content: '댓글 내용',
                        date: '2022.12.25'
                    }
                ],
                userInfo: {
                    seq: '1',
                    name: '김이름',
                    department: '개발팀',
                    content: '',
                    date: '2022.12.25'
                }
            }
        },
        methods: {
            
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>
    .comments-wrap {
        .list-comments {
            > li {
                display: flex;
                align-items: flex-start;
                &:not(:first-child) {
                    margin-top: 15px;
                }
            }
        }
        .input-comment {
            display: flex;
            align-items: flex-start;
            margin-top: 50px;
        }
        .info-wrap {
            flex: 1;
            border: 1px solid #ccc;
            padding: 20px;
            margin-left: 15px;
            .content {
                padding: 10px;
                margin: 10px 0;
            }
            .input-wrap {
                padding: 10px;
                margin: 10px 0;
            }
            .bottom-wrap {
                display: flex;
                align-items: center;
                justify-content: space-between;
                button {
                    &:not(:first-child) {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>