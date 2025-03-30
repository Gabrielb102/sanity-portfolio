<script setup>
import profilePic from '~/assets/profile-pic.png'
import LinkedInIcon from '~/components/links/LinkedInIcon.vue'
import IconLink from '~/components/links/IconLink.vue'
import GitHubIcon from '~/components/links/GitHubIcon.vue'

const linkedInURL = 'https://www.linkedin.com/in/gabriel--burgos/'
const gitHubURL = 'https://github.com/gabrielb102'
</script>

<template>
  <section class="flex md-flex-row sm-flex-col gap-4 items-center justify-center">
   <div class="flex bg-surface-100 dark:bg-surface-950 justify-around items-center gap-2 p-4 h-96 w-full border rounded-xl border-surface-300 dark:border-surface-800 shadow-sm">
     <div class="flex flex-col justify-between h-full gap-2">
       <div class="flex flex-col gap-2 my-auto">
         <h1 class="text-6xl dark:text-white">Gabriel Burgos</h1>
         <p class="dark:text-surface-400 font-extralight">Software Engineer</p>
         <p class="dark:text-white font-extralight">
           Software engineer expert in translating business needs into technical
           requirements and implementing change.
         </p>
       </div>
       <div class="flex gap-2 my-4">
         <IconLink :url="linkedInURL">
           <LinkedInIcon class="h-6 w-6 fill-black dark:fill-white" />
         </IconLink>
         <IconLink :url="gitHubURL">
           <GitHubIcon class="h-6 w-6 fill-black dark:fill-white" />
         </IconLink>
       </div>
     </div>
      <img class="w-64 h-64" :src="profilePic" alt="Gabriel"/>
    </div>
  </section>
</template>
