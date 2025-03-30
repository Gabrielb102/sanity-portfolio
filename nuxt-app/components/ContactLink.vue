<script setup>

const props = defineProps({
  name: String,
  info: String,
  link: String
})
</script>

<template>
  <div class="flex flex-row gap-2 items-center">
    <span class="font-bold">{{ name }}:</span>
    <a v-if="link" href="link">
      <span>{{ info }}</span>
    </a>
    <span v-else>{{ info }}</span>
  </div>
</template>