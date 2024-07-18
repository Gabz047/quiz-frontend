<script setup> 
import {ref} from 'vue'
import NavLinksNormal from './NavLinksNormal.vue'
import SuspenseMenu from './SuspenseMenu.vue';

</script>

<template>
    <header class="header-container">
        <div class="img-box">
            <img src="../../assets/images/baboonpurple.png" alt="">
            <h2>Banboo</h2>
        </div>

        <NavLinksNormal />
        <SuspenseMenu />

    </header>
</template>