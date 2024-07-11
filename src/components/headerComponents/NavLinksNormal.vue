<script setup>
import { links } from '@/utils/globalVar';
</script>
<template>
    <nav class="nav-containerNormal">   
        <router-link v-for="link in links" class="router-links-normal" :to="link.link">{{ link.name }}</router-link>
    </nav>
    
</template>