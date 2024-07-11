<script setup>
import { activated, links } from '@/utils/globalVar';
</script>
<template>
    <nav class="nav-container">
        <router-link @click="activated = !activated" class="router-links" v-for="link in links" :to="link.link">{{ link.name }}</router-link>
    </nav>
</template>