<template>
    <div class="header">
        <div class="logo">
            <p class="logotext" style="font-family: KaiTi;">家教帮</p>
            <el-icon class="home">
                <HomeFilled />
            </el-icon>
        </div>
        <div class="workDesktop">
            <el-icon style="font-size: 25px; margin-left: 20px; color: #606266;">
                <Menu />
            </el-icon>
            <el-icon class="mailoutlined">
                <ChatLineSquare />
            </el-icon>
            <el-dropdown>
                <el-avatar :icon="UserFilled" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                        <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-icon style="font-size: 30px; margin-right: 20px; color: #606266;"><Bell /></el-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { UserFilled } from '@element-plus/icons-vue'

</script>

<style lang="css">
.header {
    width: 100%;
    height: 70px;
    border-bottom: 4px solid #FFF;
    border-radius: 10px;
    background-color: #81e892;
    display: flex;
    justify-content: space-between;
}

.logo {
    width: 233px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logotext {
    font-size: 30px;
    margin-left: 40px;
}

.workDesktop {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.home {
    margin-right: 19px;
    font-size: 30px;
    color: #606266;
    transition: color 0.3s;
}

.home:hover {
    color: #FFF;
}


.mailoutlined {
    font-size: 30px;
    color: #606266;
    transition: color 0.3s;
}

.mailoutlined:hover {
    color: #FFF;
}
</style>