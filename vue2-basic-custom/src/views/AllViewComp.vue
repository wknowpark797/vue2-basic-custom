<!-- 
    [ All View Component ]
 -->

<template>
    <div class="all-view-wrap">
        <h2>All View Component</h2>

        <div class="group-box">

            <div class="comp-box">
                <h3>Color</h3>

                <div class="color-group">
                    <span class="main-01" />
                    <span class="main-02" />
                    <span class="main-03" />
                    <span class="main-04" />
                    <span class="main-05" />
                </div>
                <div class="color-group">
                    <span class="gray-01" />
                    <span class="gray-02" />
                    <span class="gray-03" />
                    <span class="gray-04" />
                    <span class="gray-05" />
                    <span class="gray-06" />
                    <span class="gray-07" />
                    <span class="gray-08" />
                    <span class="gray-09" />
                </div>
                <div class="color-group">
                    <span class="blue-01" />
                    <span class="blue-02" />
                    <span class="blue-03" />
                    <span class="blue-04" />
                    <span class="blue-05" />
                    <span class="blue-06" />
                    <span class="blue-07" />
                    <span class="blue-08" />
                    <span class="blue-09" />
                </div>
                <div class="color-group">
                    <span class="red-01" />
                    <span class="red-02" />
                    <span class="red-03" />
                    <span class="red-04" />
                    <span class="red-05" />
                    <span class="red-06" />
                    <span class="red-07" />
                    <span class="red-08" />
                    <span class="red-09" />
                </div>
            </div>

        </div>

        <div class="group-box">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'AllViewComp',
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .all-view-wrap {
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        h2 {
            width: 100%;
            margin-bottom: 15px;
        }
        .group-box {
            flex: 1;
            &:not(:last-child) {
                margin-right: 30px;
            }
        }
        .color-group {
            span {
                display: inline-block;
                width: 30px;
                height: 30px;
                &.main-01 { background: $main-01; }
                &.main-02 { background: $main-02; }
                &.main-03 { background: $main-03; }
                &.main-04 { background: $main-04; }
                &.main-05 { background: $main-05; }

                &.gray-01 { background: $gray-01; }
                &.gray-02 { background: $gray-02; }
                &.gray-03 { background: $gray-03; }
                &.gray-04 { background: $gray-04; }
                &.gray-05 { background: $gray-05; }
                &.gray-06 { background: $gray-06; }
                &.gray-07 { background: $gray-07; }
                &.gray-08 { background: $gray-08; }
                &.gray-09 { background: $gray-09; }

                &.blue-01 { background: $blue-01; }
                &.blue-02 { background: $blue-02; }
                &.blue-03 { background: $blue-03; }
                &.blue-04 { background: $blue-04; }
                &.blue-05 { background: $blue-05; }
                &.blue-06 { background: $blue-06; }
                &.blue-07 { background: $blue-07; }
                &.blue-08 { background: $blue-08; }
                &.blue-09 { background: $blue-09; }

                &.red-01 { background: $red-01; }
                &.red-02 { background: $red-02; }
                &.red-03 { background: $red-03; }
                &.red-04 { background: $red-04; }
                &.red-05 { background: $red-05; }
                &.red-06 { background: $red-06; }
                &.red-07 { background: $red-07; }
                &.red-08 { background: $red-08; }
                &.red-09 { background: $red-09; }
            }
        }
    }
</style>