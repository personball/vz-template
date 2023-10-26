<template>
    <div id="v-tool-header"
        class="v-tool-header h-[var(--top-tool-height)] relative px-[var(--top-tool-p-x)] flex items-center justify-between dark:bg-[var(--el-bg-color)] bg-[var(--top-header-bg-color)]"
        style="transition: left var(--transition-time-02);">
        <div class="h-full flex items-center">
            <Collapse class="v-collapse custom-hover px-10px pt-1" color="var(--top-header-text-color)"></Collapse>
            <!-- <Breadcrumb class="<md:hidden"></Breadcrumb> -->
            
        </div>
        <div class="h-full flex items-center">
            <LanguageSwitch class="custom-hover"></LanguageSwitch>
            <UserInfo class="custom-hover" ></UserInfo>
        </div>
    </div>
</template>