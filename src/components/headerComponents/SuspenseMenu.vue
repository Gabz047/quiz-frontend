<script setup>
import NavLinks from './NavLinks.vue'
import {ref} from 'vue'
const activated = ref(false)

</script>
<template>
    <span @click="activated = !activated">
    <div class="box-menuIcon" :class="{ animar: activated }">
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
        <div class="menu-bars"></div>
    </div>
    </span>

    <div class="suspense-box" v-if="activated == true">
        <NavLinks class="suspense-links"/>
    </div>
</template>

<style scoped>
.suspense-links {
    flex-direction: column;
    width: 8rem;
}
</style>