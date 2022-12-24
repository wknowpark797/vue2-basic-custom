<template>
    <div>
        <AvatarComp :src="require('@/assets/images/sample-image.png')" />
        <AvatarComp :src="require('@/assets/images/sample-image.png')"
                    :rounded="false" />
        <AvatarComp :src="require('@/assets/images/sample-image.png')"
                    :badge="true" />
        <AvatarComp :text="'Ara'" />
    </div>
</template>

<script>
    export default {
        name: 'AvatarExamComp',
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>