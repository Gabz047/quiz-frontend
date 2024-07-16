<script setup>
import { useAuthStore } from '@/stores/auth/auth';
const store = useAuthStore()
</script>
<template>
    <nav class="nav-containerNormal">   
        <router-link v-for="link in store.links" class="router-links-normal" :to="link.link">{{ link.name }}</router-link>
    </nav>
    
</template>