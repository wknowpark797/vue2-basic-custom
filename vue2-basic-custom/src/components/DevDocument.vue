<!-- Components Document -->

<template>
    <div>
        <h2>Components</h2>

        <!-- Button -->
        <div>
            <h3>Button Component</h3>

            <div>
                <ButtonComp>button</ButtonComp>
                <ButtonComp :color="'red'">button</ButtonComp>
                <ButtonComp :color="'blue'">button</ButtonComp>
                <ButtonComp :color="'green'">button</ButtonComp>
                <ButtonComp :color="'gray'">button</ButtonComp>
            </div>
            <div>
                <ButtonComp :disabled="true">button</ButtonComp>
                <ButtonComp :disabled="true" :color="'red'">button</ButtonComp>
                <ButtonComp :disabled="true" :color="'blue'">button</ButtonComp>
                <ButtonComp :disabled="true" :color="'green'">button</ButtonComp>
                <ButtonComp :disabled="true" :color="'gray'">button</ButtonComp>
            </div>
            <div>
                <ButtonComp :outlined="true">button</ButtonComp>
                <ButtonComp :outlined="true" :color="'red'">button</ButtonComp>
                <ButtonComp :outlined="true" :color="'blue'">button</ButtonComp>
                <ButtonComp :outlined="true" :color="'green'">button</ButtonComp>
                <ButtonComp :outlined="true" :color="'gray'">button</ButtonComp>
            </div>
            <div>
                <ButtonComp :disabled="true" :outlined="true">button</ButtonComp>
                <ButtonComp :disabled="true" :outlined="true" :color="'red'">button</ButtonComp>
                <ButtonComp :disabled="true" :outlined="true" :color="'blue'">button</ButtonComp>
                <ButtonComp :disabled="true" :outlined="true" :color="'green'">button</ButtonComp>
                <ButtonComp :disabled="true" :outlined="true" :color="'gray'">button</ButtonComp>
            </div>
            <div>
                <ButtonComp :size="'large'">button</ButtonComp>
                <ButtonComp>button</ButtonComp>
                <ButtonComp :size="'small'">button</ButtonComp>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'DevDocument',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>