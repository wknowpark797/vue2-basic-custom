<!-- 
    [ 드롭다운 컴포넌트 Example ]
 -->

<template>
    <div class="dropdown-exam-wrap">

        <!-- Component -->
        <DropdownComp 
            v-model="dropdownValue" 
            :options="dropdownOptions" />

        <!-- Value -->
        <div class="value-box">
            <p class="tit">
                VALUE : 
            </p>
            <p class="cont">
                {{ dropdownValue }}
            </p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'DropdownExamComp',
        data() {
            return {
                dropdownValue: '1',
                dropdownOptions: [
                    { text: 'option1', value: '1' },
                    { text: 'option2', value: '2' },
                    { text: 'option3', value: '3' }
                ]
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>