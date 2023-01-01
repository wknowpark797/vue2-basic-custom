<!-- 
    [ 스크롤탑 컴포넌트 ]
 -->

<template>
    <div 
        class="scroll-top-wrap" 
        v-if="isScroll">

        <button 
            type="button" 
            class="btn-scroll-top"
            @click="onScrollTop">
            TOP
        </button>
        
    </div>
</template>

<script>
    export default {
        name: 'ScrollTopComp',
        data() {
            return {
                isScroll: false,    // 스크롤 여부
                scrollPosition: 0   // 스크롤 위치
            }
        },
        methods: {
            onScroll() {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                if(currentScrollPosition < 0) {
                    return;
                }
                this.isScroll = currentScrollPosition > 100;
                this.scrollPosition = currentScrollPosition;
            },
            onScrollTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
        },
        beforeDestory() {
            window.removeEventListener('scroll', this.onScroll);
        }
    }
</script>

<style lang="scss" scoped>
    .scroll-top-wrap {
        position: fixed;
        bottom: 20px;
        right: 20px;
        .btn-scroll-top {
            width: 50px;
            height: 50px;
            border: 1px solid #ccc;
            background: #eee;
            cursor: pointer;
        }
    }
</style>