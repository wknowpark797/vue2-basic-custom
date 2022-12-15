<!-- 
    [ Tags Component ]
 -->

<template>
    <div class="tags-wrap">
        <div class="tag" 
             v-for="tag in list" 
             :key="tag.seq">
            <p>{{ tag.content }}</p>
            <button class="btn-delete" 
                    @click="onDeleteTag(tag.seq)">
                삭제
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TagsComp',
        data() {
            return {
                
            }
        },
        props: {
            list: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            onDeleteTag(seq) {
                this.$emit('deleteTag', seq);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags-wrap {
        display: flex;
        align-items: center;
        .tag {
            display: flex;
            align-items: center;
            border-radius: 5px;
            background: #e2e2e2;
            padding: 3px 7px;
            margin: 0 7px 7px 0;
            p {
                margin: 0;
            }
            .btn-delete {
                margin-left: 7px;
                cursor: pointer;
            }
        }
    }
</style>