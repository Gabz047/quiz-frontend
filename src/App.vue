<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/headerComponents/Header.vue'
import { useAuthStore } from './stores/auth/auth';

</script>

<template>
  <Header />

  <RouterView />
</template>