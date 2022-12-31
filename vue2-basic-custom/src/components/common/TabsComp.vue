<!-- 
    [ 탭 컴포넌트 ]

    - TODO : 
        기존 컴포넌트를 확장 - 버튼 슬라이드 추가
 -->

<template>
    <div class="tabs-wrap">
        
        <!-- Tabs Button -->
        <div class="btn-tabs-wrap">
            <button 
                type="button" 
                v-for="tab in list"
                :key="tab.seq"
                :class="{'active' : compValue === tab.seq}"
                @click="onClickTab(tab.seq)">
                {{ tab.title }}
            </button>
        </div>

        <!-- Content -->
        <div 
            class="tab-content" 
            v-for="tab in list"
            :key="tab.seq">
            <slot 
                :name="`content-${tab.seq}`"
                v-if="compValue === tab.seq" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabsComp',
        model: {
            prop: 'selected',
            event: 'change'
        },
        data() {
            return {
                compValue: this.selected
            }
        },
        props: {
            selected: {
                type: Number,
                default: 1
            },
            list: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onClickTab(seq) {
                this.compValue = seq;
                this.$emit('change', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-wrap {
        .btn-tabs-wrap {
            button {
                border: 1px solid $gray-05;
                padding: 7px 10px;
                cursor: pointer;
                &:not(:first-child) {
                    margin-left: 7px;
                }
                &.active {
                    background: $gray-05;
                }
            }
        }
        .tab-content {
            margin-top: 7px;
            .inner-tab {
                border: 1px solid $gray-05;
                padding: 15px;
            }
        }
    }
</style>