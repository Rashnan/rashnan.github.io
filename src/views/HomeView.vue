<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";

import BioCard from "../components/BioCard.vue";
import SidebarLinks from "../components/SidebarLinks.vue";
import LightSwitch from "../components/LightSwitch.vue";

const { lgAndUp, mdAndUp } = useDisplay();

const sideWidth = computed(() => (lgAndUp.value ? 300 : 200));
const shouldShew = computed(() => lgAndUp.value);
</script>

<template>
  <div v-if="mdAndUp">
    <div class="hover-left">
      <BioCard :width="sideWidth" />
    </div>
    
    <div class="hover-right">
      <SidebarLinks :should-skew="shouldShew" :width="sideWidth" style="margin-inline-end: 20px;" />
    </div>
      
    <v-container style="display: flex;justify-content: center;align-items: center;height: 100vh;">
      <v-img
        cover
        src="/pfp.png"
        rounded="circle"
        style="width: fit-content;max-height: 300px;max-width: 300px;"
      ></v-img>
    </v-container>
      
    <div class="hover-bottom">
      <LightSwitch />
    </div>
  </div>
</template>

<style scoped>
.hover-left {
  position: fixed;
  height: 100vh;
  left: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hover-right {
  position: fixed;
  height: 100vh;
  right: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hover-bottom {
  position: fixed;
  bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1280px) {
  .hover-left {
    left: 3rem;
  }

  .hover-right {
    right: 1rem;
  }

  .hover-bottom {
    bottom: 1rem;
  }
}
</style>
