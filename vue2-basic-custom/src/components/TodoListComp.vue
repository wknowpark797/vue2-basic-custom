<!-- 
    [ 상세 > 해야할 일 컴포넌트 ]
 -->

<template>
    <div class="todo-wrap">
        <h3>해야할 일</h3>

        <!-- List Todo -->
        <ul class="list-todo">
            <li 
                v-for="todo in todoList"
                :key="todo.seq">

                <div class="check-wrap">
                    <CheckSingleComp 
                        v-model="todo.done"
                        :label="todo.content" />
                </div>

                <div class="btn-wrap">
                    <ButtonComp :textButton="true">
                        수정
                    </ButtonComp>
                    <ButtonComp :textButton="true">
                        삭제
                    </ButtonComp>
                </div>
            </li>
        </ul>

        <!-- Input Todo -->
        <div class="input-todo">
            <TextareaComp 
                v-model="todoInputValue"
                :placeholder="'해야할 일을 입력해주세요.'" />

            <ButtonComp>등록</ButtonComp>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoListComp',
        data() {
            return {
                todoInputValue: '',
                todoList: [
                    {
                        seq: '1',
                        content: '해야할 일 01',
                        done: 'N'
                    },
                    {
                        seq: '2',
                        content: '해야할 일 02',
                        done: 'N'
                    },
                    {
                        seq: '3',
                        content: '해야할 일 03',
                        done: 'Y'
                    },
                    {
                        seq: '4',
                        content: '해야할 일 04',
                        done: 'N'
                    },
                    {
                        seq: '5',
                        content: '해야할 일 05',
                        done: 'Y'
                    }
                ]
            }
        },
        methods: {
            
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>
    .todo-wrap {
        .list-todo {
            margin-top: 15px;
            > li {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                &:not(:first-child) {
                    margin-top: 5px;
                }
                .btn-wrap {
                    button {
                        &:not(:first-child) {
                            margin-left: 7px;
                        }
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