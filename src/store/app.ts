import { defineStore } from 'pinia'
import { reactive, ref, Ref } from 'vue'

interface Task {
  id: number;
  name: string;
}

export const useAppStore = defineStore('app', () => {
  const tasks: Ref<Task[]> = ref([]);
  let serialId = 0;

  const addTask = (name: string): void => {
    serialId++;
    console.log(serialId);
    tasks.value.push({ id: serialId, name: name })
  }

  const deleteTask = (id: number): void => {
    tasks.value = tasks.value.filter(task => task.id !== id);

  }

  return { tasks, addTask, deleteTask }
})
