<template>
  <v-form v-model="valid">
    <v-row>
      <v-col cols="12" sm="6">
        <!-- 新規タスクを入力するテキストフィールド -->
        <v-text-field
          v-model="taskName"
          label="タスクを入力"
          variant="underlined"
          :error-messages="errorMessage"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <!-- 入力したタスクを追加するボタン -->
        <v-btn color="success" @click="addTask">追加</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
export default {
  data: () => ({
    taskName: "",
    errorMessage: "",
  }),
  methods: {
    /**
     * タスクを追加する
     */
    addTask(): void {
      if (!this.taskName.trim()) {
        // 入力が空orスペースのみの場合は何もしない
        this.errorMessage = "入力してください。";
        return;
      }
      this.errorMessage = "";
      // 親コンポーネントに入力内容を渡す
      this.$emit("click", this.taskName.trim());
      this.taskName = "";
    },
  },
};
</script>