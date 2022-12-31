<!-- 
    [ 태그 컴포넌트 Example ]
 -->

<template>
    <div class="tags-exam-wrap">
        <TagsComp 
            :list="tagList" 
            @deleteTag="onDeleteTag" />

        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ tagList }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TagsExamComp',
        data() {
            return {
                tagList: [
                    { seq: 1, content: '태그1' },
                    { seq: 2, content: '태그2' },
                    { seq: 3, content: '태그3' },
                    { seq: 4, content: '태그4' },
                    { seq: 5, content: '태그5' }
                ]
            }
        },
        methods: {
            onDeleteTag(seq) {
                const index = this.tagList.findIndex(item => item.seq === seq);
                this.tagList.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>