<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const isDarkMode = computed(() => theme.global.current.value.dark);
</script>

<template>
    <v-btn
        :icon=" isDarkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        flat
        @click="theme.toggle()"
    ></v-btn>
</template>