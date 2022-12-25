<!-- 
    [ Component Detail Component ]
 -->

<template>
    <div class="detail-wrap">
        <div class="section-wrap">
            <section class="section flex-section">
                <h2>{{ compDetail.name }}</h2>

                <!-- Component Detail -->
                <div class="group-box">
                    <component :is="compDetail.component" />
                </div>

                <!-- Todo List -->
                <div class="group-box">
                    <TodoListComp />
                </div>
            </section>

            <!-- Props -->
            <section class="section">
                <h3>Props</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Props Name</th>
                            <th>Props Type</th>
                            <th>Default Value</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Value</td>
                            <td>Description</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <!-- Methods -->
            <section class="section">
                <h3>Methods</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Methods</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Value</td>
                            <td>Description</td>
                        </tr>
                        <tr>
                            <td>Value</td>
                            <td>Description</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <!-- Comments -->
            <section class="section">
                <h3>Comments</h3>

                <CommentsComp />
            </section>
        </div>
    </div>
</template>

<script>
    import componentList from '@/data/componentsList';
    import TodoListComp from '@/components/TodoListComp';
    import CommentsComp from '@/components/CommentsComp';

    export default {
        name: 'DetailComp',
        components: {
            TodoListComp,
            CommentsComp
        },
        data() {
            return {
                compSeq: '',
                compDetail: {}
            }
        },
        methods: {
            
        },
        mounted() {
            this.compSeq = this.$route.params.seq;

            componentList.forEach(item => {
                if(item.seq === this.compSeq) {
                    this.compDetail = item;
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .detail-wrap {
        .section {
            &:not(:first-child) {
                margin-top: 30px;
            }
            h2, h3 {
                margin-bottom: 15px;
            }
        }
        .flex-section {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            h2 {
                width: 100%;
            }
            .group-box {
                flex: 1;
                border: 1px solid #ccc;
                padding: 20px;
                &:not(:last-child) {
                    margin-right: 30px;
                }
            }
        }
    }
</style>

<style lang="scss">
    .value-box {
        background: #eee;
        padding: 15px;
        margin-top: 15px;
        .tit {
            font-size: 0.875rem;
        }
        .cont {
            margin-top: 5px;
        }
    }
</style>