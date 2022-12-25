<!-- 
    [ 상세 > 댓글 ]
 -->

<template>
    <div class="comments-wrap">

        <!-- No List -->
        <p
            v-if="!commentsList || commentsList.length < 1"
            class="no-result">
            등록된 댓글이 없습니다.
        </p>

        <!-- List Comments -->
        <ul class="list-comments">
            <li 
                v-for="comment in commentsList"
                :key="comment.seq">

                <!-- 프로필 -->
                <div class="profile-wrap">
                    <AvatarComp :text="comment.name[0]" />
                </div>

                <!-- 댓글 정보 -->
                <div class="info-wrap">
                    <p class="name">
                        {{ comment.name }}
                        <span>[{{ comment.department }}]</span>
                    </p>

                    <!-- 수정 -->
                    <div
                        v-if="updateSeq === comment.seq" 
                        class="update-wrap">
                        <div class="input-wrap">
                            <TextareaComp 
                                v-model="updateParams.content"
                                :placeholder="'댓글을 입력해주세요.'" />
                        </div>

                        <div class="bottom-wrap">
                            <p class="date">{{ updateParams.date }}</p>
                            <div class="btn-wrap">
                                <ButtonComp @click="onCancelUpdate">
                                    취소
                                </ButtonComp>
                                <ButtonComp>
                                    등록
                                </ButtonComp>
                            </div>
                        </div>
                    </div>

                    <!-- 보기 -->
                    <div
                        v-else 
                        class="view-wrap">
                        <p class="content">
                            {{ comment.content }}
                        </p>

                        <div class="bottom-wrap">
                            <p class="date">{{ comment.date }}</p>
                            <div class="btn-wrap">
                                <ButtonComp 
                                    @click="onUpdateComment(comment.seq)">
                                    수정
                                </ButtonComp>
                                <ButtonComp>
                                    삭제
                                </ButtonComp>
                            </div>
                        </div>
                    </div>

                </div>

            </li>
        </ul>

        <!-- Input Comment -->
        <div class="input-comment">

            <!-- 프로필 -->
            <div class="profile-wrap">
                <AvatarComp :text="inputParams.name[0]" />
            </div>

            <!-- 댓글 정보 -->
            <div class="info-wrap">
                <p class="name">
                    {{ inputParams.name }}
                    <span>[{{ inputParams.department }}]</span>
                </p>
                <div class="input-wrap">
                    <TextareaComp 
                        v-model="inputParams.content"
                        :placeholder="'댓글을 입력해주세요.'" />
                </div>
                <div class="bottom-wrap">
                    <p class="date">{{ inputParams.date }}</p>
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
    import componentsList from '@/data/componentsList';
    import userInfo from '@/data/userInfo';

    export default {
        name: 'CommentsComp',
        data() {
            return {
                compSeq: '',
                commentsList: [],
                userInfo: {},

                updateSeq: '',
                updateParams: {
                    seq: '',
                    name: '',
                    department: '',
                    content: '',
                    date: '2022.12.25'
                },

                inputParams: {
                    name: '김이름',
                    department: '개발팀',
                    content: '',
                    date: '2022.12.25'
                }
            }
        },
        methods: {
            onUpdateComment(seq) {
                this.updateSeq = seq;
            },
            onCancelUpdate() {
                this.updateSeq = '';
            }
        },
        mounted() {
            this.compSeq = this.$route.params.seq;

            const result = componentsList.find(item => {
                return item.seq === this.compSeq;
            })
            this.commentsList = result.commentsList;

            this.userInfo = userInfo;
        }
    }
</script>

<style lang="scss" scoped>
    .comments-wrap {
        .no-result {
            @include body-2($color: $gray-05);
        }
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
            border: 1px solid $gray-05;
            padding: 20px;
            margin-left: 15px;
            .name {
                margin-bottom: 10px;
            }
            .content {
                padding: 10px;
            }
            .input-wrap {
                padding: 10px;
            }
            .bottom-wrap {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 10px;
                button {
                    &:not(:first-child) {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>