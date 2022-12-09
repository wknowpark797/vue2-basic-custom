<!-- 
    [ Button Component ]
 -->

<template>
    <button :type="type" 
            :disabled="disabled" 
            :class="[size, color, {'outlined':outlined}]" 
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
                default: 'button',
                description: 'button | reset | submit'
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
        border-radius: 3px;
        cursor: pointer;

        &:not(:first-child) {
            margin-left: 5px;
        }

        &:disabled {
            opacity: .3;
        }

        // Size
        &.large {
            padding: 12px 15px;
        }
        &.medium {
            padding: 8px 12px;
        }
        &.small {
            padding: 5px 10px;
        }

        // Color, Outlined
        &.black {
            background: black;
            color: #FFF;
            &.outlined {
                border: 1px solid black;
                background: #FFF;
                color: black;
            }
        }
        &.red {
            background: red;
            color: #FFF;
            &.outlined {
                border: 1px solid red;
                background: #FFF;
                color: red;
            }
        }
        &.blue {
            background: blue;
            color: #FFF;
            &.outlined {
                border: 1px solid blue;
                background: #FFF;
                color: blue;
            }
        }
        &.green {
            background: green;
            color: #FFF;
            &.outlined {
                border: 1px solid green;
                background: #FFF;
                color: green;
            }
        }
        &.gray {
            background: gray;
            color: #FFF;
            &.outlined {
                border: 1px solid gray;
                background: #FFF;
                color: gray;
            }
        }
    }
</style>