<!-- 
    [ 파일 업로드 컴포넌트 ]
 -->

<template>
    <div class="file-upload-wrap">

        <input 
            type="file"
            :multiple="multiple" 
            @change="onChange">
        
        <!-- 파일 리스트 -->
        <ul class="list-file">
            <li 
                v-for="(file, idx) in compValue"
                :key="idx">
                {{ file.name }}
            </li>
        </ul>

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
        name: 'FileUploadComp',
        model: {
            prop: 'value',
            event: 'change'
        },
        data() {
            return {
                compValue: this.value
            }
        },
        props: {
            value: {
                type: FileList,
                default: () => {}
            },
            multiple: {
                type: Boolean,
                default: true
            },
            errorMsg: {
                type: String,
                default: ''
            }
        },
        methods: {
            onChange(event) {
                this.compValue = event.target.files;
                this.$emit('change', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .file-upload-wrap {
        .list-file {
            margin-top: 10px;
            > li {
                &:not(:first-child) {
                    margin-top: 5px;
                }
            }
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