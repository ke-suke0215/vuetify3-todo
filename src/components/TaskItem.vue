<template>
  <div class="mt-2">
    <v-btn
      icon="mdi-delete"
      size="x-small"
      color="error"
      class="mr-2"
      @click="deleteTask"
    ></v-btn>
    <span>{{ name }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: "TaskItem",
  props: {
    taskId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    /**
     * タスクを削除する.
     */
    deleteTask(): void {
      this.$emit("deleteTask", this.taskId);
    },
  },
};
</script>
