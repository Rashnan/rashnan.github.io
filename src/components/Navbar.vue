<script setup lang="ts">
import { ref } from "vue";
import LightSwitch from "./LightSwitch.vue";

const menuItems = ref([
  { name: "Home", path: "/", icon: "mdi-home" },
  { name: "About", path: "/about", icon: "mdi-account" },
  { name: "Projects", path: "/projects", icon: "mdi-briefcase" },
]);

const { title } = defineProps<{ title: string }>();
</script>

<template>
  <v-toolbar class="mt-4" elevation="2" color="primary">
    <v-btn icon="mdi-home" to="/" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <LightSwitch />
    <v-menu location="bottom center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-menu"> </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :value="index"
          :to="item.path"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
