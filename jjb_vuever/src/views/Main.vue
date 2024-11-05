<template>
    <div class="main">
        <div class="search">
            <div class="search-text">
                <el-input class="search-text-input" placeholder="搜索科目、年级"></el-input>
            </div>
            <button className="search-button">搜索</button>
        </div>
        <div className="select-Nav">
            <div>
                <button v-for="(value, index) in subjectsNav" :class="selected === index + 1 ? 'navItem-selected' : 'navItem'" @click="handleSelect(index+1)">
                    {{ value }}
                </button>
            </div>
            <!-- {['全部', '语文', '数学', '英语', '历史', '政治', '地理', '物理', '化学', '生物', '其他'].map((v, i) => (
            <button className={selected===i + 1 ? "navItem-selected" : "navItem" } onClick={()=> handleSelect(i +
                1)}>{v}</button>
            ))} -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref(1)
const subjectsNav = ref(['全部', '语文', '数学', '英语', '历史', '政治', '地理', '物理', '化学', '生物', '其他'])

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

.search-text-input {
    width: 353px;
    font-size: 19px;
    border: none;
    outline: none;
    margin-left: 10px;
}

.search-text-input:focus {
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