<template >
  <v-container>
    <h1>Todo App</h1>
    <task-form />
    <task-item :index="1" name="タスク1" />
    <task-item :index="2" name="タスク2" />
  </v-container>
</template>

<script lang="ts">
import TaskForm from "../components/TaskForm.vue";
import TaskItem from "../components/TaskItem.vue";
export default {
  components: {
    TaskForm,
    TaskItem,
  },
};
</script>