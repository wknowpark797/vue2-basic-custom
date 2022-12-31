<!-- 
    [ 카운트 컴포넌트 ]
 -->

<template>
    <div class="count-wrap">

        <ButtonComp 
            class="btn-minus"
            :textButton=true
            @click="onClickMinus">
            <font-awesome-icon icon="minus" />
        </ButtonComp>
        
        <p class="number">
            {{ compValue }}
        </p>
        
        <ButtonComp 
            class="btn-plus"
            :textButton=true 
            @click="onClickPlus">
            <font-awesome-icon icon="plus" />
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
        border: 1px solid $gray-04;
        padding: 0 10px;
        box-sizing: border-box;
        p {
            margin: 0 15px;
            @include body-1;
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            cursor: pointer;
            svg {
                height: 16px;
                color: $gray-03;
            }
        }
    }
</style>