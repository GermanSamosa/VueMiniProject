<template>
    <nav class="navy navbar navbar-dark navbar-expand-sm">
        <div class="container">
            <router-link to="/" class="navbar-brand"><i class="bi bi-person-badge"></i> Sunny Friend Manager</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navy{
        background-color: orange;
        border-bottom:1px solid black;
    }
</style>