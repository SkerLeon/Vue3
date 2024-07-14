<!-- 此頁面放置如header . footer . nav 等共通元件 -->
<template>
    <nav>
      <!-- 使用 router-link 元件設置導航連結 -->
      <router-link to="/">i18n</router-link>
    </nav>
    <!-- 路由視圖，根據路由配置動態顯示對應的組件內容 -->
    <router-view/> 
</template>

<script setup>

</script>