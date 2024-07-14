<template>
  <h1 class="h1test">{{ t('welcome') }}</h1>
  <button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('zh')">中文</button>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const changeLanguage = (lang) => {
    locale.value = lang;
};
</script>