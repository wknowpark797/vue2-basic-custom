<!-- 
    [ 아바타 컴포넌트 ]

    - TODO : 
        등록 이미지가 없을 경우 랜덤 색상, 이니셜 적용하기
 -->

<template>
    <div class="avatar-wrap">
         <div 
            class="inner-wrap"
            :class="{'rounded' : rounded}"
            :style="`width: ${size}; height: ${size};`">
            <img 
                v-if="src" 
                :src="src" 
                alt="avatar image">
            <span v-else>
                {{ text }}
            </span>
         </div>
         
         <span 
            class="badge" 
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
                default: '50px'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .avatar-wrap {
        position: relative;
        display: inline-block;
        .inner-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eee;
            overflow: hidden;
            &.rounded {
                border-radius: 50%;
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