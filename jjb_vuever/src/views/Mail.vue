<template>
    <div class="header"></div>
    <div style="display: flex;">
        <div class="nav"></div>
        <div style="display: flex; flex-direction: column; width: 100%;">
            <div class="navbar">1111111111111111111111111111</div>
            <div class="content">11111111111111111111111111</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css">
.header {
    width: 100%; 
    background-color: aqua;
}

.nav {
    width: 200px;
    height: 100vh;
    background-color: aquamarine;
}

.navbar {
    width: 100%;
    height: 40px;
    background-color: blue;
}

.content {
    width: 100%;
    flex: 1;
    background-color: brown;
}
</style>