<!-- 
    [ File Upload Component ]
 -->

<template>
    <div class="file-upload-wrap">
        <input type="file" 
               @change="onChange">
        <p>{{ fileName }}</p>
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
                compValue: this.value,
                fileName: ''
            }
        },
        props: {
            value: {
                type: File,
                default: null
            }
        },
        methods: {
            onChange(event) {
                this.compValue = event.target.files[0];
                this.fileName = this.compValue.name;
                this.$emit('change', this.compValue);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>