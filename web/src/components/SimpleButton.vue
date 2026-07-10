<script setup lang="ts"></script>

<template>
  <button
    class="py-4 bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
