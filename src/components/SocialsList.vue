<script setup lang="ts">
interface SocialItem {
  name: string;
  path: string;
  icon: string;
  hoverColor: string;
}

const { items } = defineProps<{
  items: SocialItem[];
}>();
</script>

<template>
  <v-row>
    <v-hover
      v-slot:default="{ isHovering, props }"
      v-for="social in items"
      :key="social.name"
    >
      <v-btn
        v-bind="props"
        :href="social.path"
        target="_blank"
        rel="noopener"
        :title="social.name"
        color="transparent"
        icon
        flat
        class="me-2"
      >
        <v-icon
          :icon="social.icon"
          large
          :color="isHovering ? social.hoverColor : ''"
        />
      </v-btn>
    </v-hover>
  </v-row>
</template>
