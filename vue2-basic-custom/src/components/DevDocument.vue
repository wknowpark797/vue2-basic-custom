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

        <!-- Date / Time -->
        <div class="group-box">
            <h3>Datepicker / Timepicker Component</h3>

            <div>
                <DatepickerComp v-model="datepickerValue"
                                :label="'날짜 선택'" />
                <p>datepicker value : {{ datepickerValue }}</p>
            </div>

            <div>
                <TimepickerComp v-model="timepickerValue"
                                :label="'시간 선택'" />
                <p>timepicker value : {{ timepickerValue }}</p>
            </div>
            
        </div>

        <!-- File Upload -->
        <div class="group-box">
            <h3>File Upload Component</h3>

            <FileUploadComp v-model="fileUploadValue" />
        </div>

        <!-- Switch -->
        <div class="group-box">
            <h3>Switch Component</h3>

            <SwitchComp v-model="switchValue" />
            <p>switch value : {{ switchValue }}</p>
        </div>

        <!-- Avatar -->
        <div class="group-box">
            <h3>Avatar Component</h3>

            <div class="flex-box">
                <AvatarComp :src="require('../assets/images/sample-image.png')" />
                <AvatarComp :src="require('../assets/images/sample-image.png')"
                            :rounded="false" />
                <AvatarComp :src="require('../assets/images/sample-image.png')"
                            :badge="true" />
                <AvatarComp :text="'Ara'" />
            </div>
        </div>

        <!-- Accordion -->
        <div class="group-box">
            <h3>Accordion Component</h3>

            <AccordionComp :list="accordionList" />
        </div>

        <!-- Tags -->
        <div class="group-box">
            <h3>Tags Component</h3>

            <TagsComp :list="tagList" 
                      @deleteTag="onDeleteTag" />
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

                datepickerValue: '2022-12-01',
                timepickerValue: '19:00',
                fileUploadValue: null,
                switchValue: false,

                accordionList: [
                    {
                        seq: 1,
                        title: 'Title 1',
                        content: 'Content 1'
                    },
                    {
                        seq: 2,
                        title: 'Title 2',
                        content: 'Content 2'
                    },
                    {
                        seq: 3,
                        title: 'Title 3',
                        content: 'Content 3'
                    },
                    {
                        seq: 4,
                        title: 'Title 4',
                        content: 'Content 4'
                    },
                    {
                        seq: 5,
                        title: 'Title 5',
                        content: 'Content 5'
                    }
                ],

                tagList: [
                    { seq: 1, content: '태그1' },
                    { seq: 2, content: '태그2' },
                    { seq: 3, content: '태그3' },
                    { seq: 4, content: '태그4' },
                    { seq: 5, content: '태그5' }
                ]
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
            },

            onDeleteTag(seq) {
                const index = this.tagList.findIndex(item => item.seq === seq);
                this.tagList.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .group-box {
        > div {
            margin-top: 5px;
        }
        .flex-box {
            display: flex;
            align-items: center;
            > div {
                &:not(:first-child) {
                    margin-left: 5px;
                }
            }
        }
    }
</style>