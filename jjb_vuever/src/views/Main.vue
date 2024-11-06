<template>
    <div class="main">
        <div class="search">
            <div class="search-text">
                <el-input v-model="searchText" placeholder="搜索科目、年级" />
            </div>
            <button className="search-button">搜索</button>
        </div>
        <div className="select-Nav">
            <button v-for="(value, index) in subjectsNav"
                :class="selected === index + 1 ? 'navItem-selected' : 'navItem'" @click="handleSelect(index + 1)">
                {{ value }}
            </button>
        </div>
        <div class="All-items">
            <div class="item" v-for="(value, index) in mainItems.arr" :key="index">
                <div class="item-content">
                    <div class="item-basicMessage">
                        <div class="basicMessage-icon">
                            <p style="font-size: 14px; color: #fff;">{{ value.type ? '个人' : '机构' }}</p>
                        </div>
                        <p v-if="value.title.length > 9" style="font-size: 18px; margin-left: 15px; margin-top: 8.3px;">
                            {{ value.title.slice(0, 8) + '…' }}
                        </p>
                        <p v-else style="font-size: 18px; margin-left: 15px; margin-top: 8.3px;">
                            {{ value.title }}
                        </p>
                        <p style="font-size: 16px; color: #FA1212; margin-left: 8px; margin-top: -8px;">{{ `${value.lowSalary}-${value.highSalary}/次课` }}</p>
                        <p style="font-size: 14px; color: #606266; margin-left: 60px; margin-top: -5px;">{{ value.name }}</p>
                        <p style="font-size: 10px; color: #848484; margin-left: 7px; margin-top: -1px;">{{ value.grade }}</p>
                    </div>
                    <div class="subjectsItems">
                        <div v-for="(item, index) in value.subjects" :key="index" class="subjects-item" style="font-size: 13px; color: #19B129; font-weight: bold;">
                            {{ item }}
                        </div>
                    </div>
                </div>
                <div style="font-size: 18px; color: #fff; font-weight: bold; margin-top: -4px;">查看详情</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import axios from 'axios';

const selected = ref(1)
const searchText = ref('')
const subjectsNav = ref(['全部', '语文', '数学', '英语', '历史', '政治', '地理', '物理', '化学', '生物', '其他'])

//模拟主页面订单数据
const mainItems = reactive<{arr:{
    title: string
    type: 0 | 1
    grade: string
    lowSalary: number
    highSalary: number
    name: string
    subjects: []
}[]}>({
    arr: []
})
watch(
    selected,
        async (res,rej) => {
            const data = await axios.request({
                url: '/item',
                method: 'GET'
            })
            console.log(data.data.items)
            mainItems.arr = data.data.items
            console.log(mainItems.arr)
        }
    ,
    { immediate: true }
)

const handleSelect = (index: number) => {
    selected.value = index
}


</script>

<style lang="css">
.main {
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, #B1FFBD 0%, #D5FFDC 46.5%, #FFF 100%);
    background-attachment: fixed;
}

.search {
    width: 436px;
    height: 67px;
    border-radius: 20px;
    background: #77E789;
    margin-top: 77px;
    display: flex;
    align-items: center;
}

.search-text {
    width: 353px;
    height: 56px;
    border-radius: 20px;
    border: 6px solid #77E789;
    background: #FFF;
    display: flex;
    align-items: center;
}

.el-input__wrapper {
    width: 353px;
    font-size: 19px;
    border: none;
    outline: none;
    margin-left: 10px;
    box-shadow: none;
}

.el-input__wrapper:hover {
    box-shadow: none;
}

.el-input__wrapper.is-focus {
    border: none;
    outline: none;
    box-shadow: none;
}

.search-button {
    background-color: transparent;
    border: none;
    color: #FFF;
    font-size: 23px;
    font-weight: bold;
    margin-left: 1px;
}

.select-Nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1000px;
    border-bottom: 2px solid #ABABAB;
    margin-top: 38px;
}

.navItem {
    background-color: transparent;
    border: none;
    color: #ABABAB;
    font-size: 20px;
}

.navItem-selected {
    background-color: transparent;
    border: none;
    color: #19B129;
    font-size: 20px;
}

.All-items {
    width: 1040px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.item {
    width: 300px;
    height: 140px;
    margin-top: 30px;
    border-radius: 35px;
    background: #77E789;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transition: box-shadow 0.3s ease;
}

.item:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.item-content {
    width: 298px;
    height: 104px;
    border-radius: 35px;
    border: 2px solid #69DA7B;
    background: #FFF;
}

.item-basicMessage {
    width: 270px;
    height: 75px;
    margin-left: 15px;
    border-bottom: 1px solid #ABABAB;
    display: flex;
    flex-wrap: wrap;
}

.basicMessage-icon {
    width: 55px;
    height: 26px;
    background-color: #77E789;
    margin-top: 10px;
    margin-left: 8px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.subjectsItems {
    display: flex;
    margin-left: 20px;
}

.subjects-item {
    margin: 3px;
}
</style>