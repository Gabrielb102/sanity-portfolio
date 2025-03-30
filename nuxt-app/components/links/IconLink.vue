<script setup lang="ts">
const props = defineProps({
  url: String
})
</script>

<template>
  <a :href="url">
    <slot/>
  </a>
</template>
