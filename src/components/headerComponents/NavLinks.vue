<script setup>
import { useAuthStore } from '@/stores/auth/auth';
const store = useAuthStore()
</script>
<template>
    <nav class="nav-container">
        <router-link @click="store.activated = !store.activated" class="router-links" v-for="link in store.links" :to="link.link">{{ link.name }}</router-link>
        <button v-if="store.islogged" @click="store.logout">LOGOUT</button>
    </nav>
</template>