<!-- 
    [ 카운트 컴포넌트 ]
 -->

<template>
    <div class="count-wrap">

        <button 
            class="btn-minus"
            @click="onClickMinus">
            -
        </button>
        
        <p class="number">
            {{ compValue }}
        </p>
        
        <button 
            class="btn-plus"
            @click="onClickPlus">
            +
        </button>

    </div>
</template>

<script>
    export default {
        name: 'CountComp',
        model: {
            prop: 'value',
            event: 'click'
        },
        data() {
            return {
                compValue: this.value
            }
        },
        props: {
            value: {
                type: Number,
                default: 0
            }
        },
        methods: {
            onClickPlus() {
                this.compValue ++;
                this.$emit('click', this.compValue);
            },
            onClickMinus() {
                this.compValue --;
                this.$emit('click', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .count-wrap {
        display: inline-flex;
        align-items: center;
        height: 40px;
        border: 1px solid $gray-05;
        padding: 0 7px;
        box-sizing: border-box;
        p {
            margin: 0 15px;
            @include body-1;
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            background: $gray-06;
            @include body-1($size: 1.125rem);
            cursor: pointer;
        }
    }
</style>