<script setup>
import ContactLink from "@/components/ContactLink.vue";

const contactDeets = [
  {
    name: "Name",
    info: "Gabriel Burgos"
  },
  {
    name: "Email",
    info: "gabrielb102@gmail.com"
  },
  {
    name: "LinkedIn",
    info: "Gabriel Burgos",
    link: "https://www.linkedin.com/in/gabriel--burgos"
  },
  {
    name: "GitHub",
    info: "Link",
    link: "https://www.github.com/gabrielb102"
  }
];
</script>

<template>
  <div class="flex flex-col gap-2">
    <ContactLink v-for="deet in contactDeets" :name="deet.name" :info="deet.info" :link="deet['link']"/>
  </div>
</template>