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
            <router-link :to="''"
                        v-for="item in listComp"
                        :key="item.seq">
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
                    { seq: 1, name: 'Modal Component', link: '' },
                    { seq: 2, name: 'Alert Modal Component', link: '' },
                    { seq: 3, name: 'Confirm Modal Component', link: '' },
                    { seq: 4, name: 'Toast Component', link: '' },
                    { seq: 5, name: 'Loading Component', link: '' },
                    { seq: 6, name: 'Input Component', link: '' },
                    { seq: 7, name: 'Textarea Component', link: '' },
                    { seq: 8, name: 'Check Group Component', link: '' },
                    { seq: 9, name: 'Check Single Component', link: '' },
                    { seq: 10, name: 'Radio Component', link: '' },
                    { seq: 11, name: 'Switch Component', link: '' },
                    { seq: 12, name: 'Select Component', link: '' },
                    { seq: 13, name: 'Dropdown Component', link: '' },
                    { seq: 14, name: 'Datepicker Component', link: '' },
                    { seq: 15, name: 'Timepicker Component', link: '' },
                    { seq: 16, name: 'File Upload Component', link: '' },
                    { seq: 17, name: 'Button Component', link: '' },
                    { seq: 18, name: 'Accordion Component', link: '' },
                    { seq: 19, name: 'Avatar Component', link: '' },
                    { seq: 20, name: 'Count Component', link: '' },
                    { seq: 21, name: 'Pagination Component', link: '' },
                    { seq: 22, name: 'Rating Component', link: '' },
                    { seq: 23, name: 'Tabs Component', link: '' },
                    { seq: 24, name: 'Tags Component', link: '' },
                    { seq: 25, name: 'Scroll Top Component', link: '' }
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