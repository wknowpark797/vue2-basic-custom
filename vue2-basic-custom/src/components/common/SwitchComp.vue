<!-- 
    [ Switch Component ]
 -->

<template>
    <label class="switch-wrap">
        {{ label }}
        <input type="checkbox" 
               v-model="compValue"
               @change="onChange">
        <span class="slider" />
    </label>
</template>

<script>
    export default {
        name: 'SwitchComp',
        model: {
            prop: 'checked',
            event: 'change'
        },
        data() {
            return {
                compValue: this.checked
            }
        },
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: ''
            }
        },
        methods: {
            onChange(event) {
                this.$emit('change', event.target.checked);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .switch-wrap {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        input {
            opacity: 0;
            width: 0;
            height: 0;
            &:checked {
                & + .slider {
                    background: #2196F3;
                    &::before {
                        transform: translateX(26px);
                    }
                }
            }
        }
        .slider {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50px;
            background: #ccc;
            transition: .3s;
            cursor: pointer;
            &::before {
                content: '';
                position: absolute;
                left: 4px;
                bottom: 4px;
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background: #FFF;
                transition: .3s;
            }
        }
    }
</style>