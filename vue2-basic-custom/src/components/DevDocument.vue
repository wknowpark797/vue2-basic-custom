<!-- 
    [ Components Document ]
 -->

<template>
    <div>
        <h2>Components</h2>

        <!-- Button -->
        <div class="group-box">
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
                <ButtonComp :size="'large'">large button</ButtonComp>
                <ButtonComp>medium button</ButtonComp>
                <ButtonComp :size="'small'">small button</ButtonComp>
            </div>
        </div>

        <!-- Input -->
        <div class="group-box">
            <h3>Input Component</h3>

            <InputComp v-model="inputValue" 
                       :placeholder="'내용 입력'"
                       :label="'Label'"
                       @focusin="inputFocusin"
                       @focusout="inputFocusout" 
                       @enter="inputEnter"
                       @keyup="inputKeyup" />
            <p>input value : {{ inputValue }}</p>
        </div>

        <!-- Textarea -->
        <div class="group-box">
            <h3>Textarea Component</h3>

            <TextareaComp v-model="textareaValue"
                          :placeholder="'내용 입력'"
                          :label="'Label'" />
            <p>textarea value : {{ textareaValue }}</p>
        </div>

        <!-- Checkbox : Single -->
        <div class="group-box">
            <h3>Checkbox Single Component</h3>

            <CheckSingleComp v-model="checkSingleValue"
                             :label="'Label'" />
            <p>checkbox value : {{ checkSingleValue }}</p>
        </div>

        <!-- Checkbox : Group -->
        <div class="group-box">
            <h3>Checkbox Group Component</h3>

            <CheckGroupComp v-model="checkGroupValue"
                            :options="checkGroupOptions" />
            <p>checkbox value : {{ checkGroupValue }}</p>
        </div>

        <!-- Radio -->
        <div class="group-box">
            <h3>Radio Component</h3>

            <RadioComp v-model="radioValue" 
                       :options="radioOptions" />
            <p>radio value : {{ radioValue }}</p>
        </div>

        <!-- Select -->
        <div class="group-box">
            <h3>Select Component</h3>

            <SelectComp v-model="selectValue" 
                        :options="selectOptions" />
            <p>select value : {{ selectValue }}</p>
        </div>

        <!-- Dropdown -->
        <div class="group-box">
            <h3>Dropdown Component</h3>

            <DropdownComp v-model="dropdownValue" 
                          :options="dropdownOptions" />
            <p>dropdown value : {{ dropdownValue }}</p>
        </div>

        <!-- Datepicker -->
        <div class="group-box">
            <h3>Datepicker Component</h3>

            <DatepickerComp v-model="datepickerValue"
                            :label="'날짜 선택'" />
            <p>datepicker value : {{ datepickerValue }}</p>
        </div>

        <!-- Modal -->
        <div class="group-box">
            <h3>Modal Component</h3>

            <ButtonComp :color="'blue'" 
                        @click="showCommonModal">
                Show Modal
            </ButtonComp>
        </div>

        <ModalComp ref="commonModal">
            <template v-slot:title>
                Modal Title
            </template>

            <template v-slot:body>
                Modal Body
            </template>

            <template v-slot:footer>
                Modal Footer
            </template>
        </ModalComp>
        
    </div>
</template>

<script>
    export default {
        name: 'DevDocument',
        data() {
            return {
                inputValue: '',
                textareaValue: '',
                checkSingleValue: 'N',

                checkGroupValue: [],
                checkGroupOptions: [
                    { label: 'test1', value: 'test1' },
                    { label: 'test2', value: 'test2' },
                    { label: 'test3', value: 'test3' },
                    { label: 'test4', value: 'test4' },
                    { label: 'test5', value: 'test5' }
                ],

                radioValue: '',
                radioOptions: [
                    { label: 'test1', value: 'test1' },
                    { label: 'test2', value: 'test2' },
                    { label: 'test3', value: 'test3' },
                    { label: 'test4', value: 'test4' },
                    { label: 'test5', value: 'test5' }
                ],

                selectValue: 'option1',
                selectOptions: [
                    { text: 'option1', value: 'option1' },
                    { text: 'option2', value: 'option2' },
                    { text: 'option3', value: 'option3' }
                ],

                dropdownValue: '1',
                dropdownOptions: [
                    { text: 'option1', value: '1' },
                    { text: 'option2', value: '2' },
                    { text: 'option3', value: '3' }
                ],

                datepickerValue: '2022-12-01'
            }
        },
        methods: {
            inputFocusin() {
                console.log('input focusin');
            },
            inputFocusout() {
                console.log('input focusout');
            },
            inputEnter() {
                console.log('input enter');
            },
            inputKeyup(value) {
                console.log('keyup value : ', value);
            },

            showCommonModal() {
                this.$refs.commonModal.show();
            },
            closeCommonModal() {
                this.$refs.commonModal.close();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .group-box {
        > div {
            margin-top: 5px;
        }
    }
</style>