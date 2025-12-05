<script setup lang="ts">
import { useTheme } from "vuetify";
import SocialsList from "./SocialsList.vue";

import { ref } from "vue";
const theme = useTheme();

const footerSocials = ref([
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/rashnanms/",
    icon: "mdi-linkedin",
    hoverColor: theme.global.current.value.dark ? "blue-lighten-2" : "blue-darken-2",
  },
  {
    name: "Github",
    path: "https://github.com/Rashnan",
    icon: "mdi-github",
    hoverColor: theme.global.current.value.dark ? "deep-purple-lighten-3" : "deep-purple-darken-3",
  },
  {
    name: "ItchIo",
    path: "https://rashnan.itch.io",
    icon: "mdi-gamepad-variant",
    hoverColor:  theme.global.current.value.dark ? "cyan-lighten-3" : "cyan-darken-3",
  },
  {
    name: "Instagram",
    path: "https://instagram.com/@rashnanms",
    icon: "mdi-instagram",
    hoverColor: theme.global.current.value.dark ? "pink-lighten-2" : "pink-darken-2",
  },
]);

const { width = 300 } = defineProps<{
    width?: number;
}>();
</script>

<template>
    <!-- bio -->
    <v-card
        :width="width"
        variant="text"
    >
        <template v-slot:title>
            <div class="text-h4 text-left">
                Rashnan
            </div>
        </template>
        <template v-slot:subtitle>
            <div class="text-subtitle text-left">
                M. Shihab
            </div>
        </template>
    
        <template v-slot:text>
            <p class="mb-6 text-left text-body-2">
                Tech lover diving into AI, Robotics, Networking & Game Dev. Always
                learning, creating, and experimenting.
            </p>
            <socials-list :items="footerSocials" />
        </template>
    </v-card>
</template>