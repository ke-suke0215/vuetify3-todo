# Vuetify3, Pinia, TypeScriptを用いたTodoアプリ

## 環境セットアップ

### 使用するコマンド

`yarn create vuetify`を実行

### 聞かれること

- プロジェクト名
- 何を使用するか
- TypeScriptを使用するか
- パッケージマネージャーの選択

今回はプロジェクト名を『vuetify3-todo』、使用するのは『Vuetify+VueRouter+Pinia』、TypeScriptは使用する、パッケージマネージャーは`yarn`をそれぞれ選択。

下記にコマンド実行時の出力を載せる。

```sh
$yarn create vuetify
yarn create v1.22.17
[1/4] 🔍  Resolving packages...
Couldn't find any versions for "0" that matches "underscore"
? Please choose a version of "0" from this list: 0.0.0
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
warning Your current version of Yarn is out of date. The latest version is "1.22.19", while you're on "1.22.17".
info To upgrade, run the following command:
$ brew upgrade yarn
success Installed "create-vuetify@1.0.6" with binaries:
      - create-vuetify

Vuetify.js - Material Component Framework for Vue

✔ Project name: … vuetify3-todo
✔ Which preset would you like to install? › Essentials (Vuetify, VueRouter, Pinia)
✔ Use TypeScript? … No / Yes
✔ Would you like to install dependencies with yarn, npm, or pnpm? › yarn

◌ Generating scaffold...
◌ Installing dependencies with yarn...

yarn install v1.22.17
info No lockfile found.
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 31.01s.
```

以上でセットアップは完了。

`yarn dev`でサーバーを起動してlocalhostへアクセスすると、下のような画面が表示される。  

<img width="1174" alt="image" src="https://user-images.githubusercontent.com/65007843/211180591-9612346c-99b3-4a4e-904d-aec23edce745.png">

## 初期画面をリセット

初期は`src/views/Home.vue`の画面が表示されており、中で`src/components/HelloWorld.vue`が使用されている。  
これらは使用しないため、一度きれいな状態にしてしまう。  
`src/components/HelloWorld.vue` → 削除  
`src/views/Home.vue`は下記のように編集する  

```Home.vue
<script lang="ts" setup>
</script>

<template>
  <h1>Todo App</h1>
</template>
```

すると下のような画面となる。

<img width="750" alt="image" src="https://user-images.githubusercontent.com/65007843/211180628-ddc861f1-81c4-44fa-bf71-bbf9f3b1f12b.png">

もとからあるヘッダーを削除する。

`src/layouts/default`をフォルダごと削除。  

ヘッダーはrouterで差し込まれているので、`src/router/index.ts`の`routes`を下記のように編集

```index.ts
//省略

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
]

// 省略
```

こうすることで下のように自分で記述したタイトルのみとなり、デフォルトの表記がなくなる。

<img width="729" alt="image" src="https://user-images.githubusercontent.com/65007843/211180733-37bb4e76-18c0-4c72-b372-bbd887de8ff5.png">

## コンポーネント作成

### 作成するコンポーネント

- `TaskForm.vue`（タスクの入力フォーム）
  - テキストボックス
  - 追加ボタン
- `TaskItem.vue`（追加されたタスクの表示）
  - タスク名
  - 削除ボタン

下記コマンドで2つのファイルを作成する。

```sh
$ touch src/components/{TaskForm,TaskItem}.vue
```

まずは`Home.vue`で作成したファイルをimportして使ってみる。
2つのファイルに下のように記述する。

`TaskForm.vue`
```TaskForm.vue
<script lang="ts" setup>
</script>
<template>
  <div>TaskForm</div>
</template>
```

`TaskItem.vue`
```TaskItem.vue
<script lang="ts" setup>
</script>
<template>
  <div>TaskItem</div>
</template>
```

`src/views/Home.vue`を下のように編集する。

```Home.vue
<script lang="ts" setup>
import TaskForm from "../components/TaskForm.vue";
import TaskItem from "../components/TaskItem.vue";
</script>

<template >
  <v-container>
    <h1>Todo App</h1>
    <TaskForm />
    <TaskItem />
  </v-container>
</template>
```

ブラウザに下のように表示されていれば、importがうまく動作してコンポーネントが使用されている。

<img width="680" alt="image" src="https://user-images.githubusercontent.com/65007843/211182379-b6920900-117a-477b-b919-77bca337b211.png">

### TaskForm.vue

このコンポーネントが持つ機能は
- 入力された内容をボタンが押されたときに親コンポーネントに渡して、テキストフィールドの中身を空にする
- 入力がないorスペースのみで追加ボタンが押されたとき、エラーメッセージを表示する

以下のように実装する。

```TaskForm.vue
<script lang="ts" setup>
import { ref, defineEmits } from "vue";
const taskName = ref("");
const errorMessage = ref("");

const emits = defineEmits<{ (e: "submit", name: string): void }>();

/**
 * タスクを追加する.
 */
const addTask = (): void => {
  if (!taskName.value.trim()) {
    // 入力が空orスペースのみの場合は何もしない
    errorMessage.value = "入力してください。";
    return;
  }
  errorMessage.value = "";
  const name = taskName.value.trim();
  emits("submit", name);
  taskName.value = "";
};
</script>

<template>
  <v-form>
    <v-row>
      <v-col cols="12" sm="6">
        <!-- 新規タスクを入力するテキストフィールド -->
        <v-text-field v-model="taskName" label="タスクを入力" variant="underlined"
          :error-messages="errorMessage"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <!-- 入力したタスクを追加するボタン -->
        <v-btn @click="addTask">追加</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
```

ブラウザに下のように表示されていることを確認する。
<img width="645" alt="image" src="https://user-images.githubusercontent.com/65007843/211235315-54fcb619-3e49-4bf5-9d58-8a3779a6567f.png">


### TaskItem.vue

このコンポーネントが持つ機能
- タスクの表示
- タスクの削除

以下のように実装する。

``` TaskItem.vue
<script lang="ts" setup>
const props = defineProps<{
  taskId: number;
  name: string;
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
```

### Home.vueでTaskItem.vueにpropsを渡す

`Home.vue`を下のように編集する

```Home.vue
<script lang="ts" setup>
import TaskForm from "../components/TaskForm.vue";
import TaskItem from "../components/TaskItem.vue";
</script>

<template >
  <v-container>
    <h1>Todo App</h1>
    <TaskForm />
    <TaskItem :taskId="1" name="タスク1" />
    <TaskItem :taskId="2" name="タスク2" />
  </v-container>
</template>
```

画像のように削除ボタンとタスクが2つ表示される。

<img width="617" alt="image" src="https://user-images.githubusercontent.com/65007843/211235502-555416c1-a0ab-410a-aa96-bd37ceec87f2.png">



