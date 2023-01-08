<template >
  <v-container>
    <h1>Todo App</h1>
    <task-form />
    <!--  -->
    <template v-for="task in tasks" :key="task.taskId">
      <task-item :taskId="task.taskId" :name="task.name" />
    </template>
  </v-container>
</template>

<script lang="ts">
import TaskForm from "../components/TaskForm.vue";
import TaskItem from "../components/TaskItem.vue";
import { useAppStore } from "../store/app";
export default {
  components: {
    TaskForm,
    TaskItem,
  },
  data: () => ({
    tasks: useAppStore().task,
  }),
};
</script>



