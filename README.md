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

```zsh
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

以上でセットアップは完了

