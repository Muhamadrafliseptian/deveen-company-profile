<template>
  <section class="why">
    <div class="container">
      <h2 class="title">Kenapa Pilih Deveen?</h2>
      <p class="subtitle">
        Dengan solusi digital dari kami, bisnis Anda bekerja lebih efisien, data lebih aman, dan
        operasional lebih tertata.
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
  AppstoreOutlined, // Sistem rapi & mudah dipahami
  RocketOutlined, // Siap berkembang bersama bisnis
  SafetyCertificateOutlined, // Aman & terpercaya
  CheckCircleOutlined, // Kualitas & stabil
} from '@ant-design/icons-vue'

const items = [
  {
    icon: AppstoreOutlined,
    title: 'Sistem Rapi & Mudah Dipahami',
    desc: 'Sistem digital yang terorganisir dan mudah digunakan, sesuai cara kerja bisnis Anda.',
  },
  {
    icon: RocketOutlined,
    title: 'Siap Berkembang Bersama Bisnis',
    desc: 'Solusi yang fleksibel, bisa berkembang seiring pertumbuhan usaha tanpa repot.',
  },
  {
    icon: SafetyCertificateOutlined,
    title: 'Aman & Terpercaya',
    desc: 'Data dan sistem bisnis Anda terlindungi, sehingga Anda bisa fokus mengembangkan usaha.',
  },
  {
    icon: CheckCircleOutlined,
    title: 'Kualitas & Stabil',
    desc: 'Sistem yang handal dan stabil, sehingga operasional berjalan lancar setiap hari.',
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
  line-height: 1.5;
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
