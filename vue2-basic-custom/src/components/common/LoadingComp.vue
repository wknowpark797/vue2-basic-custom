<!-- 
    [ 로딩 컴포넌트 - 공통 사용 ]
 -->

<template>
    <div 
        class="loading-wrap" 
        v-if="isShowLoading">

        <div class="circle" />

    </div>
</template>

<script>
    export default {
        name: 'LoadingComp',
        data() {
            return {
                isShowLoading: false
            }
        },
        methods: {
            show() {
                this.isShowLoading = true;
                this.$emit('show');
            },
            close() {
                this.isShowLoading = false;
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loading-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, .8);
        z-index: 9;
        .circle {
            border: 8px solid #eee;
            border-top: 8px solid #3498db;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            animation: spin 1s linear infinite;
        }
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>