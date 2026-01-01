<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header class="header">
      <AppHeader />
    </a-layout-header>

    <a-layout-content class="content">
      <slot />
    </a-layout-content>
    <AppFooter />
  </a-layout>
</template>

<script lang="ts" setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<style scoped>
.header {
  padding: 0 40px;
}

.content {
  background: #fff;
}

.footer {
  text-align: start;
}
</style>
