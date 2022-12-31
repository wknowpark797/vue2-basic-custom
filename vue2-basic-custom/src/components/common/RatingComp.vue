<!-- 
    [ 별점 컴포넌트 ]

    - TODO : 
        별모양 아이콘 적용
 -->

<template>
    <div class="rating-wrap">
        <button 
            class="btn-rate" 
            v-for="(rate, idx) in totalRate"
            :key="idx"
            @click="onClickRate(idx + 1)">
            {{ idx + 1 }}
        </button>
    </div>
</template>

<script>
    export default {
        name: 'RatingComp',
        model: {
            prop: 'value',
            event: 'click'
        },
        data() {
            return {
                compValue: this.value,
                btnList: []
            }
        },
        props: {
            value: {
                type: Number,
                default: 0
            },
            totalRate: {
                type: Number,
                default: 5
            }
        },
        methods: {
            onClickRate(rate) {
                if(this.compValue === rate) {
                    this.compValue = rate - 1;
                } else {
                    this.compValue = rate;
                }
                
                this.onSettingRate();
                this.$emit('click', this.compValue);
            },
            onSettingRate() {
                for(let i=0; i<this.totalRate; i++) {
                    if(i < this.compValue) {
                        this.btnList[i].classList.add('active');
                    } else {
                        this.btnList[i].classList.remove('active');
                    }
                }
            }
        },
        mounted() {
            this.btnList = document.querySelectorAll('.rating-wrap .btn-rate');
            this.onSettingRate();
        }
    }
</script>

<style lang="scss" scoped>
    .rating-wrap {
        display: flex;
        align-items: center;
        .btn-rate {
            width: 25px;
            height: 25px;
            border: 1px solid $gray-05;
            cursor: pointer;
            &:not(:first-child) {
                margin-left: 15px;
            }
            &.active {
                background: $gray-05;
            }
        }
    }
</style>