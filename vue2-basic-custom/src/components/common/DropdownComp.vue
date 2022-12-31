<!-- 
    [ 드롭다운 컴포넌트 ]
 -->

<template>
    <div class="dropdown-wrap">
        <p @click="isOpen = !isOpen">
            {{ showText }}
        </p>

        <ul 
            v-if="isOpen"
            class="list-option">
            <li 
                v-for="(option, idx) in options" 
                :key="idx" 
                @click="onClick(option.value)">
                {{ option.text }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'DropdownComp',
        model: {
            prop: 'value',
            event: 'click'
        },
        data() {
            return {
                compValue: this.value,
                isOpen: false
            }
        },
        computed: {
            showText() {
                const array = this.options.filter(item => item.value === this.compValue);
                return array[0].text;
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onClick(value) {
                this.compValue = value;
                this.$emit('click', this.compValue);
                this.isOpen = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dropdown-wrap {
        position: relative;
        > p {
            display: flex;
            align-items: center;
            height: 40px;
            border: 1px solid $gray-04;
            padding: 0 12px;
            box-sizing: border-box;
            cursor: pointer;
        }
        .list-option {
            position: absolute;
            top: 40px;
            left: 0;
            width: 100%;
            background: $gray-02;
            color: #FFF;
            z-index: 9;
            > li {
                padding: 10px;
                text-align: left;
                cursor: pointer;
                &:hover {
                    background: $gray-01;
                }
            }
        }
    }
</style>