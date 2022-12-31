<!-- 
    [ 모달 컴포넌트 ]
 -->

<template>
    <div 
        ref="modal-container" 
        v-if="isShowModal"
        class="modal-wrap">

         <div 
            class="back-dimmed" 
            @click="close" />

         <div 
            class="modal"
            :class="modalClass">

            <!-- Modal Header -->
            <div class="modal-header">
                <slot name="title" />
                <ButtonComp 
                    class="btn-close"
                    :textButton=true
                    @click="close">
                    <font-awesome-icon icon="xmark" />
                </ButtonComp>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                <slot name="body" />
            </div>

            <!-- Modal Footer -->
            <div 
                class="modal-footer" 
                v-if="$slots.footer">
                <slot name="footer" />
            </div>

         </div>
        
    </div>
</template>

<script>
    export default {
        name: 'ModalComp',
        data() {
            return {
                isShowModal: false,
                bodyTag: null
            }
        },
        props: {
            modalClass: {
                type: String,
                default: ''
            }
        },
        methods: {
            show() {
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
    .modal-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        z-index: 99;
        .back-dimmed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            z-index: -1;    
        }
        .modal {
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
            .btn-close {
                cursor: pointer;
                svg {
                    height: 16px;
                }
            }
        }
        .modal-body {
            padding: 20px;
        }
        .modal-footer {
            padding: 12px 15px;
        }
    }
</style>

<style lang="scss">
    .modal-open {
        overflow: hidden;
    }
</style>