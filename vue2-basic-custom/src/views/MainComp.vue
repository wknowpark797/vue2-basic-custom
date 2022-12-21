<!-- 
    [ Main Component - component list ]
 -->

<template>
    <div class="main-wrap">
        <ButtonComp @click="$router.push('/dev/document')">
            모두보기
        </ButtonComp>

        <h2 class="page-title">Basic Component</h2>

        <div class="component-wrap">
            <router-link v-for="item in listComp"
                         :key="item.seq"
                         :to="`/detail/${item.seq}`">
                {{ item.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainComp',
        data() {
            return {
                listComp: [
                    { seq: 1, name: 'Modal Component' },
                    { seq: 2, name: 'Alert Modal Component' },
                    { seq: 3, name: 'Confirm Modal Component' },
                    { seq: 4, name: 'Toast Component' },
                    { seq: 5, name: 'Loading Component' },
                    { seq: 6, name: 'Input Component' },
                    { seq: 7, name: 'Textarea Component' },
                    { seq: 8, name: 'Check Group Component' },
                    { seq: 9, name: 'Check Single Component' },
                    { seq: 10, name: 'Radio Component' },
                    { seq: 11, name: 'Switch Component' },
                    { seq: 12, name: 'Select Component' },
                    { seq: 13, name: 'Dropdown Component' },
                    { seq: 14, name: 'Datepicker Component' },
                    { seq: 15, name: 'Timepicker Component' },
                    { seq: 16, name: 'File Upload Component' },
                    { seq: 17, name: 'Button Component' },
                    { seq: 18, name: 'Accordion Component' },
                    { seq: 19, name: 'Avatar Component' },
                    { seq: 20, name: 'Count Component' },
                    { seq: 21, name: 'Pagination Component' },
                    { seq: 22, name: 'Rating Component' },
                    { seq: 23, name: 'Tabs Component' },
                    { seq: 24, name: 'Tags Component' },
                    { seq: 25, name: 'Scroll Top Component' }
                ]
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .main-wrap {
        .page-title {
            text-align: center;
        }
        .component-wrap {
            max-width: 500px;
            max-height: calc(100vh - 200px);
            background: #f5f5f5;
            margin: 0 auto;
            padding: 20px;
            box-sizing: border-box;
            overflow: auto;
            > a {
                display: block;
                background: #999;
                padding: 15px;
                color: #fff;
                text-decoration: none;
                &:hover {
                    background: #555;
                }
                &:not(:first-child) {
                    margin-top: 15px;
                }
            }
        }
    }
</style>