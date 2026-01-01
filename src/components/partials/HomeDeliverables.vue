<template>
  <section class="deliverables">
    <div class="container">
      <h2 class="title">Apa yang Anda Dapatkan?</h2>
      <p class="subtitle">
        Deliverables profesional yang dirancang untuk memastikan kualitas, skalabilitas, dan
        keberlanjutan sistem dalam jangka panjang.
      </p>

      <a-row :gutter="[32, 32]">
        <a-col v-for="item in deliverables" :key="item.title" :xs="24" :md="8">
          <a-card hoverable class="deliverable-card">
            <div class="icon" :class="item.icon" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>

            <ul>
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script setup lang="ts">
const deliverables = [
  {
    icon: 'architecture',
    title: 'Arsitektur Sistem',
    desc: 'Perancangan sistem yang terstruktur dan disesuaikan dengan kebutuhan bisnis Anda.',
    points: [
      'Struktur aplikasi yang jelas dan modular',
      'Desain data yang scalable',
      'Pendekatan API-first untuk integrasi',
      'Desain keamanan dan kontrol akses',
    ],
  },
  {
    icon: 'code',
    title: 'Kode Siap Produksi',
    desc: 'Kode bersih, mudah dikembangkan, dan siap digunakan di lingkungan produksi.',
    points: [
      'Standar clean code dan best practices',
      'Repository dengan version control',
      'Setup testing dasar',
      'Proses review untuk menjaga kualitas',
    ],
  },
  {
    icon: 'deployment',
    title: 'Deployment & Dokumentasi',
    desc: 'Proses peluncuran sistem yang rapi dengan dokumentasi teknis yang lengkap.',
    points: [
      'Panduan deployment yang jelas',
      'Konfigurasi environment',
      'Monitoring dasar sistem',
      'Dokumentasi teknis untuk tim internal',
    ],
  },
]
</script>

<style scoped>
.deliverables {
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
  margin-bottom: 10px;
}

.subtitle {
  max-width: 640px;
  margin: 0 auto 64px;
  color: #64748b;
  font-size: 16px;
}

/* Card */
.deliverable-card {
  height: 100%;
  border-radius: 20px;
  text-align: left;
  padding: 12px;
  transition: all 0.3s ease;
}

.deliverable-card:hover {
  transform: translateY(-8px);
}

/* Icon */
.icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  margin-bottom: 20px;
}

.icon.architecture {
  background: linear-gradient(135deg, #2563eb, #60a5fa);
}

.icon.code {
  background: linear-gradient(135deg, #16a34a, #4ade80);
}

.icon.deployment {
  background: linear-gradient(135deg, #7c3aed, #c084fc);
}

/* Typography */
.deliverable-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.deliverable-card p {
  color: #64748b;
  margin-bottom: 14px;
  line-height: 1.6;
}

.deliverable-card ul {
  padding-left: 18px;
  margin: 0;
}

.deliverable-card li {
  font-size: 14px;
  color: #475569;
  margin-bottom: 6px;
  line-height: 1.6;
}

/* Mobile */
@media (max-width: 768px) {
  .deliverable-card {
    text-align: center;
  }

  .deliverable-card ul {
    text-align: left;
  }

  .icon {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
