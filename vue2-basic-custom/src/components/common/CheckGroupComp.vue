<!-- 
    [ 체크박스 그룹 컴포넌트 ]

    - TODO : 
        배열 값 정렬하기
 -->

<template>
    <div class="check-group-wrap">
        
        <label>
            <input 
                type="checkbox" 
                v-model="allChecked" 
                @change="onToggleAll">
            All
        </label>

        <label 
            v-for="(check, idx) in options" 
            :key="idx">
            <input 
                type="checkbox"
                v-model="compValue" 
                :value="check.value"
                @change="onChange">
            {{ check.label }}
        </label>

        <!-- 에러 메세지 -->
        <div
            v-if="errorMsg" 
            class="sub-wrap">
            <p class="error">
                {{ errorMsg }}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CheckGroupComp',
        model: {
            prop: 'checked',
            event: 'change'
        },
        data() {
            return {
                compValue: this.checked,
                allChecked: false
            }
        },
        props: {
            checked: {
                type: Array,
                default: () => []
            },
            options: {
                type: Array,
                default: () => []
            },
            errorMsg: {
                type: String,
                default: ''
            }
        },
        methods: {
            onToggleAll() {

                if(this.allChecked) {
                    const newValue = [];
                    this.options.forEach(item => {
                        newValue.push(item.value);
                    })
                    this.compValue = newValue;
                } else {
                    this.compValue = [];
                }

                this.$emit('change', this.compValue);
                
            },
            onChange() {
                this.allChecked = this.compValue.length === this.options.length;
                this.$emit('change', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .check-group-wrap {
        label {
            display: block;
        }
        .sub-wrap {
            @include body-3;
            padding: 0 3px;
            margin-top: 3px;
            .error {
                color: $red-05;
            }
        }
    }
</style>