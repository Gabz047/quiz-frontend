<script setup> 
import {ref} from 'vue'
import NavLinksNormal from './NavLinksNormal.vue'
import SuspenseMenu from './SuspenseMenu.vue';
import { useAuthStore } from '@/stores/auth/auth';
const store = useAuthStore()

</script>

<template>
    <header class="header-container">
        <div class="img-box">
            <img src="../../assets/images/quizicon.png" alt="">
            <h2>Banboo</h2>
        </div>

        <NavLinksNormal />
        <button @click="store.logout">LOGOUT</button>
        <SuspenseMenu />

    </header>
</template>