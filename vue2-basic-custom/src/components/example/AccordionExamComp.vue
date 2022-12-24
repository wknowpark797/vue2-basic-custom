<template>
    <div>
        <AccordionComp :list="accordionList" />
    </div>
</template>

<script>
    export default {
        name: 'AccordionExamComp',
        data() {
            return {
                accordionList: [
                    {
                        seq: 1,
                        title: 'Title 1',
                        content: 'Content 1'
                    },
                    {
                        seq: 2,
                        title: 'Title 2',
                        content: 'Content 2'
                    },
                    {
                        seq: 3,
                        title: 'Title 3',
                        content: 'Content 3'
                    },
                    {
                        seq: 4,
                        title: 'Title 4',
                        content: 'Content 4'
                    },
                    {
                        seq: 5,
                        title: 'Title 5',
                        content: 'Content 5'
                    }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>