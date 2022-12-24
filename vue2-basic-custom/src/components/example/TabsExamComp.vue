<template>
    <div>
        <TabsComp 
            v-model="tabValue"
            :list="tabList">
            <template v-slot:content-1>
                <div class="inner-tab">
                    Content 1
                </div>
            </template>
            <template v-slot:content-2>
                <div class="inner-tab">
                    Content 2
                </div>
            </template>
            <template v-slot:content-3>
                <div class="inner-tab">
                    Content 3
                </div>
            </template>
        </TabsComp>
        <p>tab value : {{ tabValue }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TabsExamComp',
        data() {
            return {
                tabValue: 3,
                tabList: [
                    { seq: 1, title: 'Tab 1' },
                    { seq: 2, title: 'Tab 2' },
                    { seq: 3, title: 'Tab 3' }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>