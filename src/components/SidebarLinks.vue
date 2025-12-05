<script setup lang="ts">
import { ref } from 'vue';

interface SidebarRoute {
    name: string;
    path: string;
    icon: string;
}

const sidebarRoutes = ref<SidebarRoute[]>([
    { name: "Home", path: "/", icon: "mdi-home" },
    { name: "About", path: "/about", icon: "mdi-account" },
    { name: "Projects", path: "/projects", icon: "mdi-briefcase" },
]);

const { shouldSkew = true, width = 300 } = defineProps<{
    shouldSkew?: boolean;
    width?: number;
}>();
</script>

<template>
    <v-list
        :width="width"
        :style="shouldSkew ? 'transform: skew(-15deg);' : ''"
        bg-color="transparent"
        color="primary"
    >
        <v-list-item
            v-for="route in sidebarRoutes"
            :key="route.name"
            :to="route.path"
            link
            class="py-4"
        >
            <template v-slot:prepend>
                <v-icon :icon="route.icon" :style="shouldSkew ? 'transform: skew(15deg);' : ''" />
            </template>
            <v-list-item-content>
                <v-list-item-title :style="shouldSkew ? 'transform: skew(15deg);' : ''">{{ route.name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>