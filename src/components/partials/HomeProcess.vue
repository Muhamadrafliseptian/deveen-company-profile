<template>
  <section class="process">
    <div class="container">
      <h2 class="title">Proses Kerja Kami</h2>
      <p class="subtitle">
        Langkah-langkah kerja kami sederhana dan jelas, agar sistem yang dibuat aman, rapi, dan
        langsung bisa dipakai untuk mendukung usaha Anda.
      </p>

      <a-steps class="process-steps">
        <a-step
          v-for="step in steps"
          :key="step.title"
          :title="step.title"
          :description="step.desc"
        >
          <template #icon>
            <component :is="step.icon" />
          </template>
        </a-step>
      </a-steps>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  SearchOutlined,
  AppstoreOutlined,
  RocketOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons-vue'

const steps = [
  {
    title: 'Kenali Bisnis Anda',
    desc: 'Kami memahami kebutuhan usaha, masalah yang dihadapi, dan cara kerja bisnis Anda.',
    icon: SearchOutlined,
  },
  {
    title: 'Rancang Sistem Rapi',
    desc: 'Membuat sistem yang mudah digunakan, rapi, dan sesuai dengan alur kerja usaha Anda.',
    icon: AppstoreOutlined,
  },
  {
    title: 'Sistem Siap Pakai',
    desc: 'Sistem dibuat agar langsung bisa dipakai untuk menjalankan operasional bisnis sehari-hari.',
    icon: RocketOutlined,
  },
  {
    title: 'Bantuan & Panduan',
    desc: 'Kami membantu memasang sistem dan memberikan panduan supaya tim Anda bisa langsung menggunakannya.',
    icon: CloudUploadOutlined,
  },
]
</script>

<style scoped>
.process {
  padding: 46px 24px;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
}

.subtitle {
  text-align: center;
  color: #6b7280;
  max-width: 720px;
  margin: 0 auto 50px;
  font-size: 15px;
  line-height: 1.5;
}

/* Steps container */
.process-steps {
  /* padding: 40px 32px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.06); */
}

/* Icon circle */
.process-steps :deep(.ant-steps-item-icon) {
  background-color: #1677ff;
  border-color: #1677ff;
  width: 44px;
  height: 44px;
  line-height: 44px;
}

.process-steps :deep(.ant-steps-icon) {
  color: #ffffff;
  font-size: 20px;
}

.process-steps :deep(.ant-steps-item-title) {
  font-weight: 600;
  font-size: 17px;
}

.process-steps :deep(.ant-steps-item-description) {
  font-size: 14px;
  color: #6b7280;
  max-width: 240px;
  line-height: 1.6;
}

.process-steps :deep(.ant-steps-item-tail::after) {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .process-steps {
    padding: 24px;
  }

  .process-steps :deep(.ant-steps-item-description) {
    max-width: 100%;
  }
}
</style>
