<!-- 
    [ 토스트 컴포넌트 - 공통 사용 ]

    - TODO : 
        타입별 스타일 적용
 -->

<template>
    <div 
        ref="toast-container" 
        v-if="isShowToast"
        class="toast-wrap">

        <div class="toast-box">
            <p class="content">
                {{ content }}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ToastComp',
        data() {
            return {
                type: '',
                content: '',
                callback: () => {},

                isShowToast: false
            }
        },
        methods: {
            show({type, content, callback}) {
                this.type = type;
                this.content = content;
                this.callback = callback;

                this.isShowToast = true;
                this.$emit('show');

                setTimeout(() => {
                    this.isShowToast = false;
                }, 3000);
            }
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>
    .toast-wrap {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px 20px;
        box-sizing: border-box;
        z-index: 9;
        .toast-box {
            border-radius: 10px;
            background: #0a7eda;
            color: #FFF;
            padding: 15px;
            .content {
                margin: 0;
            }
        }
    }
</style>