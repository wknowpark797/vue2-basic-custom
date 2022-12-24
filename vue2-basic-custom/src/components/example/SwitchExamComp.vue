<template>
    <div>
        <SwitchComp v-model="switchValue" />
        <p>switch value : {{ switchValue }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SwitchExamComp',
        data() {
            return {
                switchValue: false
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>