<template>
  <h1 class="text-3xl font-light underline bg-gray-200">
    Hello world! About
  </h1>
</template>

<script setup>
    definePageMeta({
      middleware: 'auth'
    })
</script>