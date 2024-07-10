<script setup>
const links = [{name: 'HOME', link: '/'}, {name: 'QUIZ', link: '/quiz'}, {name: 'LOGIN', link: '/auth'}]
</script>
<template>
    <nav class="nav-containerNormal">
        <router-link class="router-links" v-for="link in links" :to="link.link">{{ link.name }}</router-link>
    </nav>
</template>