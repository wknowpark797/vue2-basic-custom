<!-- 
    [ Flat Layout Component ]
 -->

<template>
    <div class="wrapper">

        <!-- Home Button -->
        <button 
            type="button" 
            class="btn-home"
            @click="$router.push('/')">
            <font-awesome-icon icon="house" />
        </button>
        
        <!-- View -->
        <router-view />
        
    </div>
</template>

<script>
    export default {
        name: 'FlatLayout',
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
    .wrapper {
        .btn-home {
            position: fixed;
            top: 15px;
            left: 15px;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 9;
            &:hover {
                background: $gray-06;
            }
            svg {
                height: 20px;
                color: $gray-04;
            }
        }
    }
</style>