<script setup>
import NavLinks from './NavLinks.vue'
import {ref} from 'vue'
const activated = ref(false)
</script>
<template>
    <div class="container-menuButton" @click="activated != activated" :class="{animar: activated }">
        <div class="menu-lines"></div>
        <div class="menu-lines"></div>
        <div class="menu-lines"></div>
    </div>

    <div class="suspense-box" v-if="activated == true">
        <NavLinks />
    </div>
</template>