<script setup lang="ts"></script>

<template>
  <div class="w-full h-full min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- TODOなので背景色は白 -->
    <div class="flex justify-center bg-white">
      <slot name="header"></slot>
    </div>
    <div class="flex justify-center my-12">
      <slot name="content"></slot>
    </div>
    <!-- TODOなので背景色は白 -->
    <div class="flex justify-center bg-white"><slot name="footer"></slot></div>
  </div>
</template>

<style scoped></style>
