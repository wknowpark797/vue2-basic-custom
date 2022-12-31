<!-- 
    [ 버튼 컴포넌트 Example ]
 -->

<template>
    <div class="button-exam-wrap">

        <!-- color -->
        <div>
            <ButtonComp :color="'black'">
                button
            </ButtonComp>
            <ButtonComp :color="'red'">
                button
            </ButtonComp>
            <ButtonComp :color="'blue'">
                button
            </ButtonComp>
            <ButtonComp :color="'green'">
                button
            </ButtonComp>
            <ButtonComp :color="'gray'">
                button
            </ButtonComp>
        </div>

        <!-- color disabled -->
        <div>
            <ButtonComp 
                :disabled="true"
                :color="'black'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :color="'red'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :color="'blue'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :color="'green'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :color="'gray'">
                button
            </ButtonComp>
        </div>

        <!-- outlined -->
        <div>
            <ButtonComp 
                :outlined="true"
                :color="'black'">
                button
            </ButtonComp>
            <ButtonComp 
                :outlined="true" 
                :color="'red'">
                button
            </ButtonComp>
            <ButtonComp 
                :outlined="true" 
                :color="'blue'">
                button
            </ButtonComp>
            <ButtonComp 
                :outlined="true" 
                :color="'green'">
                button
            </ButtonComp>
            <ButtonComp 
                :outlined="true" 
                :color="'gray'">
                button
            </ButtonComp>
        </div>

        <!-- outlined disabled -->
        <div>
            <ButtonComp 
                :disabled="true" 
                :outlined="true"
                :color="'black'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :outlined="true" 
                :color="'red'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :outlined="true" 
                :color="'blue'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :outlined="true" 
                :color="'green'">
                button
            </ButtonComp>
            <ButtonComp 
                :disabled="true" 
                :outlined="true" 
                :color="'gray'">
                button
            </ButtonComp>
        </div>

        <!-- text button -->
        <div>
            <ButtonComp
                :textButton="true" 
                :color="'black'">
                button
            </ButtonComp>
            <ButtonComp
                :textButton="true" 
                :color="'red'">
                button
            </ButtonComp>
            <ButtonComp
                :textButton="true" 
                :color="'blue'">
                button
            </ButtonComp>
            <ButtonComp
                :textButton="true" 
                :color="'green'">
                button
            </ButtonComp>
            <ButtonComp
                :textButton="true" 
                :color="'gray'">
                button
            </ButtonComp>
        </div>

        <!-- text button disabled -->
        <div>
            <ButtonComp
                :disabled="true"
                :textButton="true" 
                :color="'black'">
                button
            </ButtonComp>
            <ButtonComp
                :disabled="true"
                :textButton="true" 
                :color="'red'">
                button
            </ButtonComp>
            <ButtonComp
                :disabled="true"
                :textButton="true" 
                :color="'blue'">
                button
            </ButtonComp>
            <ButtonComp
                :disabled="true"
                :textButton="true" 
                :color="'green'">
                button
            </ButtonComp>
            <ButtonComp
                :disabled="true"
                :textButton="true" 
                :color="'gray'">
                button
            </ButtonComp>
        </div>

        <!-- size -->
        <div>
            <ButtonComp :size="'large'">
                large button
            </ButtonComp>
            <ButtonComp :size="'medium'">
                medium button
            </ButtonComp>
            <ButtonComp :size="'small'">
                small button
            </ButtonComp>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'ButtonExamComp',
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .button-exam-wrap {
        > div {
            &:not(:first-child) {
                margin-top: 10px;
            }
        }
        button {
            &:not(:first-child) {
                margin-left: 10px;
            }
        }
    }
</style>