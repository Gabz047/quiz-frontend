<script setup> 
import NavLinks from './NavLinks.vue'
import SuspenseMenu from './SuspenseMenu.vue';
</script>
<template>
    <header class="header-container">
        <div class="img-box">
            <h1>ha</h1>
        </div>

        <NavLinks class="showcontent" />
        <SuspenseMenu />
    </header>
</template>

<style scoped>
.showcontent {
    display: none;
}
@media (min-width: 770px) {
.showcontent {
    display: flex;
}
}
</style>