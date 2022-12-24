<!-- 
    [ Component Detail Component ]
 -->

<template>
    <div class="detail-wrap">
        <h2>{{ compDetail.name }}</h2>

        <component :is="compDetail.component" />
    </div>
</template>

<script>
    import componentList from '@/data/componentList';

    export default {
        name: 'DetailComp',
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

</style>