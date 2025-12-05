<script setup lang="ts">
import { computed, ref } from "vue";
import { useDisplay, useTheme, type JSXComponent } from "vuetify";

import Navbar from "../components/Navbar.vue"

const { mdAndUp } = useDisplay();
const theme = useTheme();

const isDarkMode = computed(() => theme.global.current.value.dark);

interface TimelineItem {
  title: string;
  description: string | JSXComponent;
  color?: string;
  icon?: string;
  date?: string;
  link?: string;
}

const allTimelineItems = computed(() => ([
  {
    title: "Cambridge IGCSE",
    description: "7 A* - English, Math, Physics, Chemistry, Biology, Computer Science, Addition Maths",
    date: "2020",
    icon: "mdi-school",
  },
  {
    title: "Cambridge A Levels",
    description: "5 A*, 1 A - Physics, Math, Chemistry, Computer Science, Accounting, Further Math",
    date: "2022",
    icon: "mdi-school",
  },
  {
    title: "Al-Ghazali Award",
    description: "Prestigious Al-Ghazali Award for Academic Excellence in IISM",
    date: "2022",
    icon: "mdi-trophy-variant-outline",
  },
  {
    title: "MikalNews Website",
    description: "A Dhivehi Wordpress News Website. Custom-made RTL theme.",
    link: "https://mikalnews.com",
    date: "2023",
    icon: "mdi-web",
    color: "secondary",
  },
  {
    title: "CCNA1 Certification",
    description: "Cisco Certified Network Associate - Introduction to Networks",
    date: "2023",
    icon: "mdi-certificate",
  },
  {
    title: "ICEST2023 / De-shredding Paper",
    description: "Best student presentation award. Using computer vision to reconstruct shredded documents.",
    link: "https://doi.org/10.1063/5.0231940",
    date: "2023",
    icon: "mdi-note-search-outline",
  },
  {
    title: "Software Development Internship",
    description: "Completed a 6-month software development internship at Prosecutor General's Office, Maldives.",
    date: "2023",
    icon: "mdi-work",
    link: "https://pgoffice.gov.mv/en",
    color: "secondary",
  },
  {
    title: "CCNA2 Certification",
    description: "Cisco Certified Network Associate - Switching, Routing, and Wireless Essentials",
    date: "2024",
    icon: "mdi-certificate",
    color: "primary",
  },
  {
    title: "Cisco APJC NetAcad Riders - Final Round",
    description: "Represented MNU in the final round of the Cisco APJC NetAcad Riders competition.",
    date: "2024",
    icon: "mdi-trophy-variant-outline",
    color: "primary",
  },
  {
    title: "AI Research & Development",
    description: "Employed at Synetecs in the research and development of AI solutions for clients.",
    date: "2023",
    icon: "mdi-robot",
    link: "https://synetecs.io/",
    color: "secondary",
  },
  {
    title: "Fantasy Uni",
    description: "Created a 2d platformer game for advertising CETE, MNU. Showcased in the MNU Fahi Dhuvas 2024",
    date: "2024",
    icon: "mdi-gamepad-variant",
    color: "secondary",
  },
  {
    title: "MJET / Two-wheeled Self-balancing Robot",
    description: "MJET Inaugural Issue. Research and development of a self-balancing robot.",
    link: "https://doi.org/10.70592/mjet.2024.1.01.004",
    date: "2024",
    icon: "mdi-note-search-outline",
  },
  {
    title: "MNU Marathon Portal",
    description: "Developed a portal to handle registrations for the MNU Marathon 2026.",
    link: "https://marathon.mnu.edu.mv",
    icon: "mdi-web",
    date: "2025",
    color: "secondary",
  },
  {
    title: "Student Speaker Series",
    description: "Invited as a speaker to share my journey and experiences with new students at MNU.",
    date: "2025",
    icon: "mdi-account-voice",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    description: "First Class Honours. Dean's award. Valedictorian. President's award.",
    icon: "mdi-school",
    date: "2025",
    color: "primary",
  },
  {
    title: "Part-time Lecturer",
    description: "Appointed as a part-time lecturer at the Faculty of Engineering, Science and Technology, MNU. Teaching CCNA1 and CCNA2 courses.",
    date: "2025",
    icon: "mdi-briefcase-account",
    color: "primary",
  },
  {
    title: "Restaurant VR Game",
    description: "Developed a waiter training simulation in VR for FHTS, MNU. Showcased in the MNU EduTech Symposium 2025",
    icon: "mdi-gamepad-variant",
    date: "2025",
    color: "secondary",
  },
  {
    title: "ICEST2025 / Auto Computer",
    description: "Best Student Paper Award - Emerging engineer award. Using VLMs to automate GUI control in Windows",
    link: "https://icest.mnu.edu.mv/",
    date: "2025",
    icon: "mdi-note-search-outline",
    color: "primary",
  },
  {
    title: "Started Personal Blog",
    description: "Sharing knowledge and experiences",
    date: "Now!",
    color: "secondary",
  },
] as TimelineItem[]).reverse());

const loadedTimelineItems = ref<number>(4);
</script>

<template>
  <v-sheet min-height="100vh" max-width="1080px" class="mx-auto pa-4">
    <v-card flat width="fit-content" class="mx-auto pa-4">
      <template v-slot:prepend>
        <v-img
          src="/island-pfp.jpg"
          width="50"
          height="50"
          cover
          rounded="circle"
        ></v-img>
      </template>
      <template v-slot:title>
        <span class="text-h5 font-weight-bold">Rashnan</span>
        <span class="font-weight-light">'s Blog</span>
      </template>
      <template v-slot:subtitle>
        <p class="text-body-2">Small words. Big impact.</p>
      </template>
    </v-card>

    <Navbar title="My Journey" />

    <v-container class="mt-8">
      <v-timeline
        align="start"
        :side="mdAndUp ? undefined : 'end'"
        truncate-line="start"
      >
        <v-timeline-item
          v-for="(item, index) in allTimelineItems.slice(0, loadedTimelineItems)"
          :key="index"
          size="large"
          :dot-color="item.color || 'grey-lighten-2'"
          :icon="item.icon"
        >
          <template v-slot:opposite>
            <div style="display: flex;align-items: center;height: 40px;">
              {{ item.date }}
            </div>
          </template>

          <v-card
            density="compact"
            :variant="isDarkMode ? 'tonal' : 'elevated'"
            max-width="300px"
          >
            <v-card-title
              :class="[
                item.color ? `bg-${item.color}` : 'bg-grey-lighten-2',
                'text-wrap',
              ]"
            >
              {{ item.title }}
            </v-card-title>
            <v-card-text :class="['pt-4', 'text-body-2', item.link ? 'pb-0' : '']">
              {{ item.description }}
            </v-card-text>

            <template v-slot:actions v-if="item.link">
              <v-btn :href="item.link" target="_blank" icon="mdi-open-in-new" class="ms-auto me-2" size="16px"></v-btn>
            </template>
          </v-card>
        </v-timeline-item>
      </v-timeline>

      <v-btn
        v-if="loadedTimelineItems < allTimelineItems.length"
        class="mx-auto mt-4"
        icon="mdi-arrow-down"
        variant="tonal"
        style="display: block;"
        @click="loadedTimelineItems += 4"
      >
      </v-btn>
    </v-container>
  </v-sheet>
</template>
