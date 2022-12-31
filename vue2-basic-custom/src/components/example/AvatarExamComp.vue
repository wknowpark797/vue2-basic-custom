<!-- 
    [ 아바타 컴포넌트 Example ]
 -->

<template>
    <div class="avatar-exam-wrap">

        <!-- Component -->
        <AvatarComp 
            :src="require('@/assets/images/sample-image.png')"
            :size="'80px'" />
        <AvatarComp 
            :src="require('@/assets/images/sample-image.png')"
            :rounded="false"
            :size="'80px'" />
        <AvatarComp 
            :src="require('@/assets/images/sample-image.png')"
            :badge="true" />
        <AvatarComp 
            :text="'Ara'" />

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
    .avatar-exam-wrap {
        display: flex;
        align-content: center;
        .avatar-wrap {
            &:not(:first-child) {
                margin-left: 10px;
            }
        }
    }
</style>