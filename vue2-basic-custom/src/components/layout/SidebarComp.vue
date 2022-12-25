<!-- 
    [ Sidebar Component ]
 -->

<template>
    <div class="sidebar-wrap">
        <div class="inner-sidebar">
            <ButtonComp 
                :color="'black'"
                :textButton="true"
                @click="$router.push('/')">
                홈
            </ButtonComp>

            <div class="profile-wrap">
                <AvatarComp :src="require('@/assets/images/sample-image.png')" />
                <ButtonComp 
                    :size="'small'"
                    @click="showProfileImgUpdateModal">
                    수정
                </ButtonComp>
            </div>

            <div class="info-wrap">
                <p class="name">{{ userInfo.name }}</p>
                <p class="department">{{ userInfo.department }}</p>
                <p class="email">{{ userInfo.email }}</p>
            </div>

            <div class="btn-wrap">
                <ButtonComp @click="showProfileUpdateModal">프로필 수정</ButtonComp>
                <ButtonComp>로그아웃</ButtonComp>
                <ButtonComp>로그인</ButtonComp>
            </div>
        </div>
        
        <!-- 프로필 수정 모달 -->
        <ModalComp 
            ref="profileUpdateModal" 
            class="profile-update-modal">
            <template v-slot:title>
                프로필 수정
            </template>

            <template v-slot:body>
                <div class="inner-modal">
                    <div class="input-wrap">
                        <InputComp 
                            v-model="updateParams.name" 
                            :placeholder="'이름을 입력해주세요.'" />
                    </div>
                    <div class="dropdown-wrap">
                        <DropdownComp 
                            v-model="updateParams.department" 
                            :options="departmentOptions" />
                    </div>
                    <div class="input-wrap">
                        <InputComp 
                            v-model="updateParams.email" 
                            :placeholder="'이메일을 입력해주세요.'" />
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="btn-wrap">
                    <ButtonComp>
                        취소
                    </ButtonComp>
                    <ButtonComp>
                        수정
                    </ButtonComp>
                </div>
            </template>
        </ModalComp>

        <!-- 프로필 이미지 수정 모달 -->
        <ModalComp 
            ref="profileImgUpdateModal"
            class="profile-img-update-modal">
            <template v-slot:title>
                프로필 이미지 수정
            </template>

            <template v-slot:body>
                <div class="inner-modal">
                    <div class="upload-wrap">
                        <FileUploadComp v-model="imgUploadValue" />
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="btn-wrap">
                    <ButtonComp>
                        취소
                    </ButtonComp>
                    <ButtonComp>
                        수정
                    </ButtonComp>
                </div>
            </template>
        </ModalComp>

    </div>
</template>

<script>
    export default {
        name: 'SidebarComp',
        data() {
            return {
                userInfo: {
                    seq: '1',
                    name: '김이름',
                    department: '개발팀',
                    email: 'email@gmail.com',
                    content: '',
                    date: '2022.12.25'
                },
                updateParams: {
                    name: '',
                    department: '1',
                    email: ''
                },
                departmentOptions: [
                    { text: '개발팀', value: '1' },
                    { text: '기획팀', value: '2' },
                    { text: '디자인팀', value: '3' }
                ],
                imgUploadValue: null
            }
        },
        methods: {
            showProfileUpdateModal() {
                this.$refs.profileUpdateModal.show();
            },
            closeProfileUpdateModal() {
                this.$refs.profileUpdateModal.close();
            },
            showProfileImgUpdateModal() {
                this.$refs.profileImgUpdateModal.show();
            },
            closeProfileImgUpdateModal() {
                this.$refs.profileImgUpdateModal.close();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-wrap {
        width: 250px;
        height: 100vh;
        background: #eee;
        padding: 15px;
        box-sizing: border-box;
        .inner-sidebar {
            .info-wrap {
                margin: 15px 0;
            }
            .btn-wrap {
                button {
                    display: block;
                    width: 100%;
                    &:not(:first-child) {
                        margin-top: 10px;
                    }
                }
            }
        }
    }

    // 프로필 수정 모달
    .profile-update-modal {
        .inner-modal {
            > div {
                &:not(:first-child) {
                    margin-top: 15px;
                }
            }
        }
        .btn-wrap {
            text-align: right;
            button {
                &:not(:first-child) {
                    margin-left: 10px;
                }
            }
        }
    }

    // 프로필 이미지 수정 모달
    .profile-img-update-modal {
        .btn-wrap {
            text-align: right;
            button {
                &:not(:first-child) {
                    margin-left: 10px;
                }
            }
        }
    }
</style>
