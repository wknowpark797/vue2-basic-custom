<!-- 
    [ 태그 컴포넌트 ]
 -->

<template>
    <div class="tags-wrap">
        <div 
            class="tag" 
            v-for="tag in list" 
            :key="tag.seq">
            
            <p>{{ tag.content }}</p>
            
            <button 
                class="btn-delete"
                @click="onDeleteTag(tag.seq)">
                <font-awesome-icon icon="xmark" />
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
        flex-wrap: wrap;
        .tag {
            display: flex;
            align-items: center;
            border-radius: 5px;
            background: $gray-06;
            padding: 7px 10px;
            margin: 0 7px 7px 0;
            p {
                margin: 0;
            }
            .btn-delete {
                display: flex;
                margin-left: 10px;
                cursor: pointer;
            }
        }
    }
</style>