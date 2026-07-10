<script setup lang="ts">
import MainLayout from './layouts/mainLayout.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <MainLayout>
    <template #header>TODO: This is header area</template>
    <template #subHeader>TODO: This is subHeader area</template>
    <template #content>
      <HomeView />
    </template>
    <template #footer>TODO: This is footer</template>
  </MainLayout>
</template>

<style scoped></style>
