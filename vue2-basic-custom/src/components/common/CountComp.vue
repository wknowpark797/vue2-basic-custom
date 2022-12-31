<!-- 
    [ 카운트 컴포넌트 ]
 -->

<template>
    <div class="count-wrap">

        <ButtonComp 
            class="btn-minus"
            :textButton=true
            @click="onClickMinus">
            -
        </ButtonComp>
        
        <p class="number">
            {{ compValue }}
        </p>
        
        <ButtonComp 
            class="btn-plus"
            :textButton=true 
            @click="onClickPlus">
            +
        </ButtonComp>

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
            cursor: pointer;
            &.text-button {
                background: $gray-06;
                @include body-1;
            }
        }
    }
</style>