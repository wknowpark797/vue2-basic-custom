<!-- 
    [ All View Component ]
 -->

<template>
    <div class="all-view-wrap">
        <h2>컴포넌트 모두보기 <span>{{ componentsList.length }}</span></h2>

        <div class="comp-box">
            <h3>색상</h3>

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

        <div 
            class="comp-box" 
            v-for="component in componentsList"
            :key="component.seq">

            <h3>{{ component.name }}</h3>
            <component :is="component.component" />

        </div>

    </div>
</template>

<script>
    import componentsList from '@/data/componentsList';

    export default {
        name: 'AllViewComp',
        data() {
            return {
                componentsList: []
            }
        },
        methods: {
            
        },
        mounted() {
            this.componentsList = componentsList;
        }
    }
</script>

<style lang="scss" scoped>
    .all-view-wrap {
        display: flex;
        flex-wrap: wrap;
        h2 {
            width: 100%;
            margin-bottom: 15px;
            span {
                color: $red-05;
            }
        }
        .comp-box {
            flex-basis: calc(50% - 10px);
            border: 1px solid $gray-03;
            padding: 15px;
            margin: 5px;
            box-sizing: border-box;
            h3 {
                margin-bottom: 10px;
            }
        }
        .color-group {
            span {
                display: inline-block;
                width: 30px;
                height: 30px;

                &.gray-01 { background: $gray-01; }
                &.gray-02 { background: $gray-02; }
                &.gray-03 { background: $gray-03; }
                &.gray-04 { background: $gray-04; }
                &.gray-05 { background: $gray-05; }
                &.gray-06 { background: $gray-06; }
                &.gray-07 { background: $gray-07; }
                &.gray-08 { background: $gray-08; }
                &.gray-09 { background: $gray-09; }

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

<style lang="scss">
    .all-view-wrap {
        .scroll-top-wrap {
            position: relative;
            bottom: auto;
            right: auto;
        }
    }
</style>