<template>
    <ElDropdown trigger="click" v-bind="$attrs">
        <div class="flex items-center px-10px pt-1">
            <el-icon>
                <IconUser></IconUser>
            </el-icon>
            <!-- <img src="@/assets/imgs/avatar.jpg" alt="" class="w-[calc(var(--logo-height)-25px)] rounded-[50%]" /> -->
            <span class="<lg:hidden text-14px pl-[5px] text-[var(--top-header-text-color)]">
                {{ appStore.currentUser?.name }}</span>
        </div>
        <template #dropdown>
            <ElDropdownMenu>
                <ElDropdownItem>
                    <div @click="showEditProfile">{{ t('common.editProfile') }}</div>
                </ElDropdownItem>
                <ElDropdownItem>
                    <div @click="showChangePwd">{{ t('common.changePwd') }}</div>
                </ElDropdownItem>
                <ElDropdownItem divided>
                    <div @click="loginOut">{{ t('common.logout') }}</div>
                </ElDropdownItem>
            </ElDropdownMenu>
        </template>
    </ElDropdown>

    <ChangePwd v-if="showChangePwdDialog" v-model="showChangePwdDialog"></ChangePwd>
    <EditProfile v-if="showEditProfileDialog" v-model="showEditProfileDialog"></EditProfile>
</template>

<script lang="ts" setup>
import IconUser from '~icons/ep/user'

const appStore = useAppStore()

const { t } = useI18n()

const showEditProfileDialog = ref(false)
const showEditProfile = () => {
    showEditProfileDialog.value = true
}

const showChangePwdDialog = ref(false)
const showChangePwd = () => {
    showChangePwdDialog.value = true
}

const { state: { value: { userManager } }, actions: { value: { removeUser } } } = useOidcStore()
const loginOut = async () => {
    removeUser()
    await userManager?.signoutRedirect()
}

</script>