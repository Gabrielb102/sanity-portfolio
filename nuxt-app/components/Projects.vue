<script setup>
const query = groq`*[ _type == 'project' ]`
const { data: projects } = await useSanityQuery(query)

watch(
  projects,
  () => {
    console.log('Projects updated:', projects)
  },
  { immediate: true },
)
</script>

<template>
  <section
    class="flex md-flex-row sm-flex-col gap-4 items-center justify-center"
  >
    <div
      class="flex flex-col bg-surface-100 dark:bg-surface-950 justify-around items-center gap-2 p-4 h-fit w-full border rounded-xl border-surface-300 dark:border-surface-800 shadow-sm"
    >
      <h2 class="text-3xl uppercase text-surface-800 dark:text-white">
        Projects
      </h2>
      <li>
        <ul class="flex flex-col gap-4">
          <li
            v-for="project in projects"
            :key="project._id"
            class="flex flex-col gap-2"
          >
            <img
              v-if="project.mainImage?.asset"
              :src="$urlFor(project.mainImage).width(300).auto('format').url()"
              :alt="project.title || ''"
              class="w-full max-h-40 object-cover rounded"
            />
            <h3 class="text-xl font-bold text-surface-800 dark:text-white">
              {{ project.title }}
            </h3>
            <p class="text-surface-600 dark:text-surface-400">
              {{ project.excerpt }}
            </p>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </li>
        </ul>
      </li>
    </div>
  </section>
</template>
