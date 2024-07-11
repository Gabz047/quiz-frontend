<script setup> 
import {ref} from 'vue'
import NavLinksNormal from './NavLinksNormal.vue'
import SuspenseMenu from './SuspenseMenu.vue';

</script>

<template>
    <header class="header-container">
        <div class="img-box">
            <h1>Qzll</h1>
        </div>

        <NavLinksNormal />
        <SuspenseMenu />
    </header>
</template>