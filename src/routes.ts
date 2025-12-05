import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./views/HomeView.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("./views/AboutView.vue")
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("./views/ProjectsView.vue")
    }
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});