<!-- 
    [ Main Component - component list ]
 -->

<template>
    <div class="main-wrap">
        Main

        <div>
            <router-link :to="'/login'">Login</router-link>
        </div>
        <div>
            <router-link :to="'/dev/document'">Dev Document</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainComp',
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>