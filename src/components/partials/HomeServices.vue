<template>
  <section class="services">
    <div class="container">
      <h2 class="title">Layanan Kami</h2>
      <p class="subtitle">
        Dari website hingga sistem operasional, kami membantu bisnis bekerja lebih efisien dengan
        solusi digital yang tepat.
      </p>

      <a-row :gutter="[32, 32]">
        <a-col :xs="24" :md="8">
          <a-card class="service-card" hoverable>
            <CodeOutlined class="icon" />
            <h3>Aplikasi Web</h3>
            <p>
              Membuat aplikasi web yang mudah digunakan untuk mengelola bisnis Anda, aman, cepat,
              dan siap dikembangkan sesuai kebutuhan.
            </p>
          </a-card>
        </a-col>

        <a-col :xs="24" :md="8">
          <a-card class="service-card" hoverable>
            <ApartmentOutlined class="icon" />
            <h3>Sistem Bisnis</h3>
            <p>
              Sistem HRIS, PoS, dan Warehouse untuk menyederhanakan pekerjaan sehari-hari,
              meningkatkan efisiensi, dan mendukung pertumbuhan usaha.
            </p>
          </a-card>
        </a-col>

        <a-col :xs="24" :md="8">
          <a-card class="service-card" hoverable>
            <GlobalOutlined class="icon" />
            <h3>Website Perusahaan</h3>
            <p>
              Website company profile profesional untuk menampilkan kredibilitas bisnis, menarik
              pelanggan, dan memberi pengalaman pengguna yang nyaman.
            </p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CodeOutlined, ApartmentOutlined, GlobalOutlined } from '@ant-design/icons-vue'
</script>

<style scoped>
.services {
  padding: 46px 24px;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 12px;
}

.subtitle {
  max-width: 600px;
  margin: 0 auto 64px;
  color: #6b7280;
  font-size: 15px;
}

/* Card */
.service-card {
  height: 100%;
  padding: 36px 32px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  transition: all 0.25s ease;
  text-align: left;
}

.service-card:hover {
  border-color: #1677ff;
  transform: translateY(-6px);
}

/* Icon */
.icon {
  font-size: 36px;
  color: #1677ff;
  margin-bottom: 20px;
}

/* Typography */
.service-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.service-card p {
  color: #6b7280;
  line-height: 1.65;
  font-size: 14px;
}

/* Mobile */
@media (max-width: 768px) {
  .service-card {
    text-align: center;
  }
}
</style>
