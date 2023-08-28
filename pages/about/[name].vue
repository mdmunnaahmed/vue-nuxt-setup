<template>
    <div>
        <h1>this is all about {{ route.params.name }}</h1>
    </div>
</template>

<script setup>
const route = useRoute()
</script>

<style lang="scss" scoped>

</style>