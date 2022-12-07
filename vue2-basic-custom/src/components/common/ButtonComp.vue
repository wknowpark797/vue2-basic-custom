<!-- Button Component -->

<template>
    <button :type="type" 
            :disabled="disabled" 
            :class="[size, color, outlined]" 
            @click="onClick">
        <slot />
    </button>
</template>

<script>
    export default {
        name: 'ButtonComp',
        props: {
            type: {
                type: String,
                default: 'button',
                description: 'button | reset | submit'
            },
            size: {
                type: String,
                default: 'medium',
                description: 'large | medium | small'
            },
            color: {
                type: String,
                default: 'black',
                description: 'black | red | blue | green | gray'
            },
            outlined: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            onClick() {
                this.$emit('click');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>