<!-- 
    [ 페이지네이션 컴포넌트 ]
 -->

<template>
    <div class="pagination-wrap">
        <button 
            class="btn-prev"
            v-if="displayBtn" 
            :disabled="btnPrevDisabled"
            @click="onClickPrev">
            이전
        </button>

        <button 
            class="btn-page"
            v-for="page in pageList"
            :key="page"
            :class="{'active':compValue === page}"
            @click="onClickPage(page)">
            {{ page }}
        </button>

        <button 
            class="btn-next"
            v-if="displayBtn"
            :disabled="btnNextDisabled"
            @click="onClickNext">
            다음
        </button>
    </div>
</template>

<script>
    export default {
        name: 'PaginationComp',
        model: {
            prop: 'value',
            event: 'change'
        },
        data() {
            return {
                compValue: this.value
            }
        },
        props: {
            value: {
                type: Number,
                default: 1,
                description: '현재 페이지'
            },
            totalPageCnt: {
                type: Number,
                default: 7,
                description: '총 페이지 수'
            },
            displayPageCnt: {
                type: Number,
                default: 5,
                description: '보여줄 페이지 수'
            }
        },
        computed: {

            // 이전, 다음 버튼 노출여부
            displayBtn() {
                return this.totalPageCnt > this.displayPageCnt;
            },
            
            // 현재 페이지 그룹 번호
            currentPageGroup() {
                // 1 ~ 5  페이지는 그룹 1 : return 1
                // 6 ~ 10 페이지는 그룹 2 : return 2
                return Math.ceil(this.compValue / this.displayPageCnt);
            },

            // 그룹의 마지막 번호
            groupLastNum() {
                // 그룹 1의 마지막 번호 : 5
                // 그룹 2의 마지막 번호 : 7
                const lastNum = this.currentPageGroup * this.displayPageCnt;
                if(lastNum > this.displayPageCnt) {
                    return this.totalPageCnt;
                }
                return lastNum;
            },

            // 그룹의 첫번째 번호
            groupFirstNum() {
                // 마지막 그룹의 경우
                if(this.groupLastNum === this.totalPageCnt) {
                    // 그룹에 보여줄 페이지 수만큼 페이지가 존재하는지 여부
                    const displayFull = this.groupLastNum % this.displayPageCnt === 0;
                    return displayFull
                        ? this.groupLastNum - this.displayPageCnt + 1
                        : this.groupLastNum - (this.groupLastNum % this.displayPageCnt) + 1;
                }
                return this.groupLastNum - (this.displayPageCnt - 1);
            },

            // 페이지 리스트
            pageList() {
                const list = [];
                for(let i=this.groupFirstNum; i<=this.groupLastNum; i++) {
                    list.push(i);
                }
                return list;
            },

            // 다음 버튼 비활성화
            btnNextDisabled() {
                return this.groupLastNum >= this.totalPageCnt;
            },

            // 이전 버튼 비활성화
            btnPrevDisabled() {
                return this.groupFirstNum <= 1;
            }
        },
        methods: {
            onClickPage(page) {
                if(this.compValue === page) {
                    return false;
                }
                this.compValue = page;
                this.$emit('change', this.compValue);
            },
            onClickPrev() {
                this.compValue = this.groupFirstNum - this.displayPageCnt;
                this.$emit('change', this.compValue);
            },
            onClickNext() {
                this.compValue = this.groupLastNum + 1
                this.$emit('change', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination-wrap {
        button {
            cursor: pointer;
            &:not(:first-child) {
                margin-left: 15px;
            }
            &.btn-page {
                width: 25px;
                height: 25px;
                border: 1px solid $gray-05;
                &.active {
                    background: $gray-05;
                }
            }
        }
    }
</style>