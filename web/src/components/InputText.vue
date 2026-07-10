<script setup lang="ts">
const modelValue = defineModel<string>({ default: '' })
</script>

<template>
  <input
    v-model="modelValue"
    class="px-5 py-4 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
  />
</template>

<style scoped></style>
