import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

// 型定義
interface Task {
  id: number;
  name: string;
}

export const useAppStore = defineStore('app', () => {
  const tasks: Ref<Task[]> = ref([]);
  let serialId = 0;

  /**
   * タスクを追加する.
   * @param name タスク名
   */
  const addTask = (name: string): void => {
    serialId++;
    tasks.value.push({ id: serialId, name: name })
  }

  /**
   * タスクを削除する.
   * @param id 削除するタスクid
   */
  const deleteTask = (id: number): void => {
    tasks.value = tasks.value.filter(task => task.id !== id);

  }

  return { tasks, addTask, deleteTask }
})
