<!-- 
    [ Avatar Component ]

    - TODO : 
        등록 이미지가 없을 경우 랜덤 색상, 이니셜 적용하기
 -->

<template>
    <div class="avatar-wrap">
         <div class="inner-wrap"
              :class="[{'rounded':rounded}, size]">
            <img v-if="src" 
                 :src="src" 
                 alt="avatar image">
            <span v-else>{{ text }}</span>
         </div>
         
         <span class="badge" 
               v-if="badge" />               
    </div>
</template>

<script>
    export default {
        name: 'AvatarComp',
        data() {
            return {
                
            }
        },
        props: {
            text: {
                type: String,
                default: ''
            },
            src: {
                type: String,
                default: ''
            },
            badge: {
                type: Boolean,
                default: false
            },
            rounded: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: 'medium',
                description: 'small | medium | large'
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .avatar-wrap {
        position: relative;
        .inner-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eee;
            overflow: hidden;
            &.rounded {
                border-radius: 50%;
            }
            &.small {
                width: 20px;
                height: 20px;
            }
            &.medium {
                width: 35px;
                height: 35px;   
            }
            &.large {
                width: 50px;
                height: 50px;   
            }
            img {
                height: 100%;
            }
        }
        .badge {
            width: 7px;
            height: 7px;
            background: red;
            border-radius: 50%;
            position: absolute;
            top: -3px;
            right: -3px;
        }
    }
</style>