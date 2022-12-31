<!-- 
    [ 검색 컴포넌트 ]
 -->

<template>
    <div class="search-wrap">

        <div class="input-wrap">
            <InputComp 
                v-model="compValue"
                :placeholder="placeholder"
                :type="'text'"
                :disabled="disabled"
                :readonly="readonly"
                @input="onInput"
                @enter="onEnter" />
        </div>

        <ButtonComp 
            class="btn-search"
            :size="'large'" 
            @click="onSearch">
            검색
        </ButtonComp>
        
    </div>
</template>

<script>
    export default {
        name: 'SearchComp',
        model: {
            prop: 'value',
            event: 'input'
        },
        data() {
            return {
                compValue: this.value
            }
        },
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            placeholder: {
                type: String,
                default: '검색어 입력'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            onInput() {
                this.$emit('input', this.compValue);
            },
            onEnter() {
                this.$emit('enter');
            },
            onSearch() {
                this.$emit('search');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-wrap {
        display: flex;
        align-items: center;
        .input-wrap {
            flex: 1;
        }
    }
</style>

