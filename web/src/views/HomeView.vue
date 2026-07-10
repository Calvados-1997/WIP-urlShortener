<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import SimpleButton from '@/components/SimpleButton.vue'
import { ref } from 'vue'

const inputURL = ref<string>('')
const createURL = (): void => {
  // TODO: URL作成処理
  console.log('URL作成ボタンが押下されました。')
}
</script>

<template>
  <div
    class="w-110 flex flex-col gap-7 pt-10 pb-20 px-6 bg-slate-800 rounded-3xl border-slate-300 shadow-2xl"
  >
    <label class="text-sm font-medium text-slate-300" for="url">URLを入力</label>
    <InputText v-model="inputURL" id="url" :placeholder="'ようこそ'" />
    <SimpleButton @click="createURL">URLを作成</SimpleButton>
  </div>
</template>

<style scoped></style>
