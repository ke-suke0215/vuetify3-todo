<script lang="ts" setup>
import TaskForm from "../components/TaskForm.vue";
import TaskItem from "../components/TaskItem.vue";
import { useAppStore } from "../store/app";
const store = useAppStore();
</script>

<template >
  <v-container>
    <h1>Todo App</h1>
    <TaskForm @submit="store.addTask" />
    <!-- for文でタスクを表示させる -->
    <template v-for="task in store.tasks" :key="task.taskId">
      <TaskItem :taskId="task.id" :name="task.name" @deleteTask="store.deleteTask" />
    </template>
  </v-container>
</template>
