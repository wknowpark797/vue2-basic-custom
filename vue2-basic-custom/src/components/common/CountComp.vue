<!-- 
    [ Count Component ]
 -->

<template>
    <div class="count-wrap">
        <button class="btn-minus"
                @click="onClickMinus">
            -
        </button>
        <p class="number">{{ compValue }}</p>
        <button class="btn-plus" 
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
        display: flex;
        align-items: center;
        p {
            margin: 0 10px;
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            border: 1px solid #ccc;
            cursor: pointer;
        }
    }
</style>