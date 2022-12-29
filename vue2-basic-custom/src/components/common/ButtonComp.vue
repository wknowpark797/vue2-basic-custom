<!-- 
    [ 버튼 컴포넌트 ]
 -->

<template>
    <button 
        :type="type"  
        :class="[
            size, 
            color, 
            {'outlined' : outlined}, 
            {'text-button' : textButton}
        ]" 
        :disabled="disabled"
        @click="onClick">

        <slot />
    
    </button>
</template>

<script>
    export default {
        name: 'ButtonComp',
        data() {
            return {
                
            }
        },
        props: {
            type: {
                type: String,
                default: 'button'
            },
            size: {
                type: String,
                default: 'medium',
                description: 'large | medium | small'
            },
            color: {
                type: String,
                default: 'black',
                description: 'black | red | blue | green | gray'
            },
            outlined: {
                type: Boolean,
                default: false
            },
            textButton: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick() {
                this.$emit('click');
            }
        },
    }
</script>

<style lang="scss" scoped>
    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:disabled {
            opacity: .3;
        }

        // size
        &.large {
            height: 40px;
            padding: 0 20px;
            @include body-2;
        }
        &.medium {
            height: 35px;
            padding: 0 15px;
            @include body-2;
        }
        &.small {
            height: 30px;
            padding: 0 10px;
            @include body-3;
        }
        &.text-button {
            height: auto;
            font-weight: 700;
            padding: 0;
        }

        // color, outlined, textButton
        &.black {
            background: $gray-01;
            color: #FFF;
            &.outlined {
                border: 1px solid $gray-01;
                background: #FFF;
                color: $gray-01;
            }
            &.text-button {
                border: 0;
                background: none;
                color: $gray-01;
            }
        }
        &.red {
            background: $red-04;
            color: #FFF;
            &.outlined {
                border: 1px solid $red-04;
                background: #FFF;
                color: $red-04;
            }
            &.text-button {
                border: 0;
                background: none;
                color: $red-04;
            }
        }
        &.blue {
            background: #0a7eda;
            color: #FFF;
            &.outlined {
                border: 1px solid #0a7eda;
                background: #FFF;
                color: #0a7eda;
            }
            &.text-button {
                border: 0;
                background: none;
                color: #0a7eda;
            }
        }
        &.green {
            background: #037003;
            color: #FFF;
            &.outlined {
                border: 1px solid #037003;
                background: #FFF;
                color: #037003;
            }
            &.text-button {
                border: 0;
                background: none;
                color: #037003;
            }
        }
        &.gray {
            background: $gray-04;
            color: #FFF;
            &.outlined {
                border: 1px solid $gray-04;
                background: #FFF;
                color: $gray-04;
            }
            &.text-button {
                border: 0;
                background: none;
                color: $gray-04;
            }
        }
    }
</style>
