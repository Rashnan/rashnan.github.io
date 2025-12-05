<script setup lang="ts">
import BioCard from "../components/BioCard.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
    <div style="width: 400px">
      <Navbar title="Projects" />

      <BioCard :width="400" class="mt-8" />

      <p class="mt-8 px-0 text-body-2 text-center" style="width: 400px">
        Projects will be updated soon...
      </p>
    </div>
  </div>
</template>
