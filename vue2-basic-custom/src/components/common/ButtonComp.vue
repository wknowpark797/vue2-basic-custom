<!-- 
    [ Button Component ]
 -->

<template>
    <button :type="type" 
            :disabled="disabled" 
            :class="[size, color, {'outlined':outlined}, {'text-button':textButton}]" 
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
        cursor: pointer;
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
        &.text-button {
            padding: 0;
        }

        // Color, Outlined, textButton
        &.black {
            background: black;
            color: #FFF;
            &.outlined {
                border: 1px solid black;
                background: #FFF;
                color: black;
            }
            &.text-button {
                border: 0;
                background: none;
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
            &.text-button {
                border: 0;
                background: none;
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
            &.text-button {
                border: 0;
                background: none;
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
            &.text-button {
                border: 0;
                background: none;
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
            &.text-button {
                border: 0;
                background: none;
                color: gray;
            }
        }
    }
</style>