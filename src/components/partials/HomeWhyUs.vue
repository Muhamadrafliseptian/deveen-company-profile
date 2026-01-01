<template>
  <section class="why">
    <div class="container">
      <h2 class="title">Kenapa Pilih Deveen?</h2>
      <p class="subtitle">
        Kami membangun sistem digital yang andal, scalable, dan sesuai dengan proses bisnis Anda.
      </p>

      <a-row :gutter="[32, 32]">
        <a-col v-for="item in items" :key="item.title" :xs="24" :md="12" :lg="6">
          <a-card class="why-card" hoverable>
            <component :is="item.icon" class="icon" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ApartmentOutlined,
  CloudOutlined,
  SafetyCertificateOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons-vue'

const items = [
  {
    icon: ApartmentOutlined,
    title: 'Arsitektur Sistem Terstruktur',
    desc: 'Perancangan arsitektur yang modular, terukur, dan selaras dengan proses bisnis.',
  },
  {
    icon: CloudOutlined,
    title: 'Sistem Siap Bertumbuh',
    desc: 'Infrastruktur cloud-ready untuk mendukung skalabilitas dan performa jangka panjang.',
  },
  {
    icon: SafetyCertificateOutlined,
    title: 'Keamanan Terstandar',
    desc: 'Implementasi standar keamanan pada level aplikasi, data, dan infrastruktur.',
  },
  {
    icon: DeploymentUnitOutlined,
    title: 'Kualitas & Keandalan',
    desc: 'Proses development teruji untuk memastikan sistem stabil dan mudah dikembangkan.',
  },
]
</script>

<style scoped>
.why {
  padding: 20px 24px;
  background: #fafafa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
}

.subtitle {
  text-align: center;
  color: #6b7280;
  max-width: 680px;
  margin: 0 auto 56px;
  font-size: 15px;
}

.why-card {
  height: 100%;
  padding: 32px 28px;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  transition: all 0.25s ease;
}

.why-card:hover {
  border-color: #1677ff;
  transform: translateY(-4px);
}

.icon {
  font-size: 32px;
  color: #1677ff;
  margin-bottom: 10px;
}

.why-card h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
}

.why-card p {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}
</style>
