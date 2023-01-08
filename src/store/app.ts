import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    task: [
      {
        id: 1,
        name: "タスク1",
      },
      {
        id: 2,
        name: "タスク2",
      },
    ],
  }),
})
