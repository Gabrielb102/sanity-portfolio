<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import { type Post } from '~/types/Post'

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`
const { data: posts } = await useSanityQuery<Post[]>(query)
</script>

<template>
  <div class="flex flex-col gap-4">
    <Hero />
    <Projects />
  </div>
</template>
