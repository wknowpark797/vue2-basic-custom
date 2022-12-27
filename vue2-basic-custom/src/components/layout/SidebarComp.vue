<!-- 
    [ 사이드 영역 컴포넌트 ]
 -->

<template>
    <div class="sidebar-wrap">
        <div class="inner-sidebar">
            <div class="profile-wrap">
                <AvatarComp 
                    :src="require('@/assets/images/sample-image.png')"
                    :size="'150px'" />
                <ButtonComp 
                    v-if="isLogin"
                    :size="'small'"
                    class="btn-update"
                    @click="showProfileImgUpdateModal">
                    수정
                </ButtonComp>
            </div>

            <div 
                v-if="isLogin"
                class="info-wrap">
                <p class="name">
                    {{ userInfo.name }}
                </p>
                <p class="department">
                    {{ userInfo.department }}
                </p>
                <p class="email">
                    {{ userInfo.email }}
                </p>
            </div>

            <div class="btn-wrap">
                <template v-if="isLogin">
                    <ButtonComp @click="showProfileUpdateModal">
                        프로필 수정
                    </ButtonComp>
                    <ButtonComp @click="onLogout">
                        로그아웃
                    </ButtonComp>    
                </template>
                <ButtonComp 
                    v-else 
                    @click="onLogin">
                    로그인
                </ButtonComp>
            </div>
        </div>
        
        <!-- 프로필 수정 모달 -->
        <ProfileUpdateModal ref="profileUpdateModal" />

        <!-- 프로필 이미지 수정 모달 -->
        <ProfileImgUpdateModal ref="profileImgUpdateModal" />
        
    </div>
</template>

<script>
    import ProfileUpdateModal from '@/components/modal/ProfileUpdateModal';
    import ProfileImgUpdateModal from '@/components/modal/ProfileImgUpdateModal';

    export default {
        name: 'SidebarComp',
        components: {
            ProfileUpdateModal,
            ProfileImgUpdateModal
        },
        data() {
            return {
                isLogin: true,
                userInfo: {
                    seq: '1',
                    name: '김이름',
                    department: '개발팀',
                    email: 'email@gmail.com',
                    content: '',
                    date: '2022.12.25'
                }
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
            },
            onLogin() {
                this.$router.push('/login');
            },
            onLogout() {
                this.isLogin = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-wrap {
        width: 250px;
        height: 100vh;
        background: $gray-08;
        padding: 15px;
        box-sizing: border-box;
        .inner-sidebar {
            .profile-wrap {
                text-align: center;
                position: relative;
                .btn-update {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
            .info-wrap {
                margin-top: 20px;
                p {
                    &:not(:first-child) {
                        margin-top: 10px;
                    }
                }
            }
            .btn-wrap {
                margin-top: 20px;
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
</style>
