<script setup>
import NavLinks from './NavLinks.vue'
import {activated} from '@/utils/globalVar'
</script>
<template>
    <span @click="activated = !activated">
    <div class="box-menuIcon" :class="{ animar: activated}">
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
    </div>
    </span>

    <div class="suspense-box" v-if="activated == true">
        <NavLinks class="suspense-links"/>
    </div>
</template>