<!-- 
    [ 상세 > 해야할 일 컴포넌트 ]
 -->

<template>
    <div class="todo-wrap">
        <h3>해야할 일</h3>

        <!-- no List -->
        <p 
            v-if="!todoList || todoList.length < 1"
            class="no-result">
            등록된 할 일이 없습니다.
        </p>

        <!-- List Todo -->
        <ul
            v-else
            class="list-todo">
            <li 
                v-for="todo in todoList"
                :key="todo.seq">

                <!-- 수정 -->
                <div
                    v-if="updateSeq === todo.seq" 
                    class="update-wrap">
                    <TextareaComp 
                        v-model="updateParams.content"
                        :placeholder="'해야할 일을 입력해주세요.'" />

                    <div class="btn-wrap btn-update-wrap">
                        <ButtonComp @click="onCancelUpdate">
                            취소
                        </ButtonComp>
                        <ButtonComp>등록</ButtonComp>
                    </div>
                </div>

                <!-- 보기 -->
                <template v-else>
                    <div class="view-wrap">
                        <CheckSingleComp 
                            v-model="todo.done"
                            :label="todo.content" />
                    </div>

                    <div class="btn-wrap btn-view-wrap">
                        <ButtonComp 
                            :textButton="true"
                            @click="onUpdateTodo(todo.seq)">
                            수정
                        </ButtonComp>
                        <ButtonComp :textButton="true">
                            삭제
                        </ButtonComp>
                    </div>    
                </template>

            </li>
        </ul>

        <!-- Input Todo -->
        <div
            v-if="updateSeq === ''" 
            class="input-todo">
            <TextareaComp 
                v-model="inputParams.content"
                :placeholder="'해야할 일을 입력해주세요.'" />

            <ButtonComp>등록</ButtonComp>
        </div>

    </div>
</template>

<script>
    import componentsList from '@/data/componentsList';

    export default {
        name: 'TodoListComp',
        data() {
            return {
                compSeq: '',
                todoList: [],
                
                updateSeq: '',
                updateParams: {
                    seq: '',
                    content: '',
                    done: ''
                },

                inputParams: {
                    content: '',
                    done: 'N'
                }
            }
        },
        methods: {
            onUpdateTodo(seq) {
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
            this.todoList = result.todoList;
        }
    }
</script>

<style lang="scss" scoped>
    .todo-wrap {
        h3 {
            margin-bottom: 15px;
        }
        .no-result {
            @include body-2($color: $gray-05);
        }
        .list-todo {
            > li {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                &:not(:first-child) {
                    margin-top: 15px;
                }
                .update-wrap {
                    flex: 1;
                }
                .view-wrap {
                    flex: 1;
                    display: flex;
                    align-items: flex-start;
                }
                .btn-wrap {
                    button {
                        &:not(:first-child) {
                            margin-left: 7px;
                        }
                    }
                    &.btn-update-wrap {
                        text-align: right;
                    }
                    &.btn-view-wrap {
                        margin-left: 10px;
                    }
                }
            }
        }
        .input-todo {
            margin-top: 50px;
            text-align: right;
        }
    }
</style>