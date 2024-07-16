<script setup>
import NavLinks from './NavLinks.vue'
import { useAuthStore } from '@/stores/auth/auth';
const store = useAuthStore()
</script>
<template>
    <span @click="store.activated = !store.activated">
    <div class="box-menuIcon" :class="{ animar: store.activated}">
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
    </div>
    </span>

    <div class="suspense-box" v-if="store.activated == true">
        <NavLinks class="suspense-links"/>
    </div>
</template>