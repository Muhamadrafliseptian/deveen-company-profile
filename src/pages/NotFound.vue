<template>
  <a-result status="404" title="404" sub-title="Halaman yang kamu cari tidak ditemukan.">
    <template #extra>
      <a-space>
        <a-button type="primary" @click="goHome"> Kembali ke Beranda </a-button>
        <a-button @click="goBack"> Kembali </a-button>
      </a-space>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.back()
}
</script>
