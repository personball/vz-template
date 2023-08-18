import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        isAdmin: false
    }),
    actions: {

    }
})