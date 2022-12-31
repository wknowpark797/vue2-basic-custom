<!-- 
    [ 탭 컴포넌트 Example ]
 -->

<template>
    <div class="tabs-exam-wrap">

        <!-- Component -->
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

        <!-- Value -->
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ tabValue }}
            </p>
        </div>
        
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