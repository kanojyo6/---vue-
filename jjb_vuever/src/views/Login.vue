<template>
    <el-row>
        <el-col :span="16">
            <div class="login-description">
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <p style="font-size: 70px; font-weight: bold; font-family: KaiTi; color: #FFF;">家教帮</p>
                    <p style="font-size: 30px; font-weight: bold; color: #FFF;">———— 不知道写什么先随便写写 ————</p>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="login-form">
                <div style="display: flex; flex-direction: column; align-items: center; width: 80%;">
                    <p style="font-size: 30px; font-weight: bold; color: #42b883;">登录系统</p>
                    <el-form-item label="用户名：">
                        <el-input style="width: 250px;" v-model="data.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="密码：" style="margin-left: 16px;">
                        <el-input type="password" style="width: 250px;" v-model="data.password" placeholder="请输入密码" />
                    </el-form-item>
                    <div style="display: flex; justify-content: space-around;">
                        <el-button class="loginForm-button" @click="login">登录</el-button>
                        <el-button class="loginForm-button">注册</el-button>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="css">
.login-description {
    background-color: #42b883;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginForm-button {
    background-color: #42b883;
    color: #fff;
    transition: border 0.3s,
        background-color 0.3s,
        color 0.3s;
}

.loginForm-button:hover {
    border: #42b883 1px solid;
    color: #42b883;
    background-color: #fff;
}
</style>

<script setup lang="ts">
import router from '@/router';
import { reactive, ref } from 'vue';

const data = reactive({
    username: '',
    password: '',
})

const login = () => {
    router.push('/main')
    console.log(data.username)
    console.log(data.password)
}

</script>