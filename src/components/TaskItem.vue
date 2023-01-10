<script lang="ts" setup>
const props = defineProps<{
  taskId: number,
  name: string,
}>();

const emits = defineEmits<{
  (e: "deleteTask", id: number): void;
}>();

/**
 * タスクを削除する.
 */
const deleteTask = (): void => {
  emits("deleteTask", props.taskId);
};
</script>
<template>
  <div class="mt-2">
    <v-btn icon="mdi-delete" size="x-small" color="error" class="mr-2" @click="deleteTask"></v-btn>
    <span>{{ name }}</span>
  </div>
</template>
