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
<template>
  <h1>Todo App</h1>
</template>

<script lang="ts" setup>
</script>
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
  - チェックボックス
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
<template>
  <div>TaskForm</div>
</template>

<script lang="ts">
</script>
```

`TaskItem.vue`
```TaskItem.vue
<template>
  <div>TaskItem</div>
</template>

<script lang="ts">
</script>
```

`src/views/Home.vue`を下のように編集する。

```Home.vue
<template>
  <h1>Todo App</h1>
  <task-form />
  <task-item />
</template>

<script lang="ts">
import TaskForm from "../components/TaskForm.vue";
import TaskItem from "../components/TaskItem.vue";
</script>
```

ブラウザに下のように表示されていれば、importがうまく動作してコンポーネントが使用されている。

<img width="680" alt="image" src="https://user-images.githubusercontent.com/65007843/211182379-b6920900-117a-477b-b919-77bca337b211.png">

### TaskForm.vue





