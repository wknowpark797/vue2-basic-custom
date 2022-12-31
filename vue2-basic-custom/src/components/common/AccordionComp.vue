<!-- 
    [ 아코디언 컴포넌트 ]
 -->

<template>
    <div class="accordion-wrap">
        <div 
            class="accordion-box" 
            v-for="item in compList"
            :key="item.seq">
            <p 
                class="title" 
                @click="onToggleActive(item.seq)">
                {{ item.title }}
            </p>
            <div 
                class="content"
                v-if="item.active">
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AccordionComp',
        data() {
            return {
                compList: []
            }
        },
        props: {
            list: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onToggleActive(seq) {
                this.compList.forEach(item => {
                    if(item.seq === seq) {
                        item.active = !item.active;
                    }
                })
            }
        },
        mounted() {
            this.list.forEach(item => {
                this.compList.push({
                    seq: item.seq,
                    title: item.title,
                    content: item.content,
                    active: false
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    .accordion-wrap {
        border: 1px solid $gray-05;
        .accordion-box {
            &:not(:last-child) {
                border-bottom: 1px solid $gray-05;
            }
            .title {
                padding: 10px;
                margin: 0;
                cursor: pointer;
            }
            .content {
                background: $gray-08;
                padding: 15px;
            }
        }
    }
</style>