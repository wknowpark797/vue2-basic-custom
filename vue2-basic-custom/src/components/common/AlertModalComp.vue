<!-- 
    [ 메세지 모달 컴포넌트 - 공통 사용 ]
 -->

<template>
    <div 
        ref="alert-modal-container" 
        v-if="isShowModal"
        class="alert-modal-wrap">
        
        <div 
            class="back-dimmed" 
            @click="close" />

        <div class="alert-modal">
            <div class="modal-header">
                <p class="title">
                    {{ title }}
                </p>
                <ButtonComp 
                    class="btn-close"
                    :textButton=true
                    @click="close">
                    <font-awesome-icon icon="xmark" />
                </ButtonComp>
            </div>

            <div class="modal-body">
                <p class="content">
                    {{ content }}
                </p>
            </div>

            <div class="modal-footer">
                <ButtonComp
                    :size="'small'"
                    @click="close">
                    확인
                </ButtonComp>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AlertModalComp',
        data() {
            return {
                title: '',
                content: '',
                callback: () => {},

                isShowModal: false,
                bodyTag: null
            }
        },
        methods: {
            show({title, content, callback}) {
                this.title = title;
                this.content = content;
                this.callback = callback;

                this.isShowModal = true;
                this.bodyTag.classList.add('modal-open');
                this.$emit('show');
            },
            close() {
                this.isShowModal = false;
                this.bodyTag.classList.remove('modal-open');
                this.$emit('close');
            }
        },
        mounted() {
            this.bodyTag = document.getElementsByTagName('body')[0];
        }
    }
</script>

<style lang="scss" scoped>
    .alert-modal-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        z-index: 9;
        .back-dimmed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            z-index: -1;    
        }
        .alert-modal {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            min-width: 300px;
            background: #FFF;
        }
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #eee;
            padding: 12px 15px;
            .title {
                margin: 0;
            }
            .btn-close {
                cursor: pointer;
                svg {
                    height: 16px;
                }
            }
        }
        .modal-body {
            padding: 20px;
            .content {
                margin: 0;
            }
        }
        .modal-footer {
            padding: 12px 15px;
            text-align: right;
        }
    }
</style>