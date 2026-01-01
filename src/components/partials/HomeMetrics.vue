<template>
  <section class="metrics">
    <div class="container">
      <a-row :gutter="[32, 32]">
        <a-col v-for="(item, index) in metrics" :key="item.label" :xs="24" :sm="12" :md="6">
          <div
            ref="metricRefs"
            class="metric"
            :style="{ background: item.gradient, transitionDelay: `${index * 150}ms` }"
          >
            <component :is="item.icon" class="metric-icon" />
            <div class="value">{{ item.value }}</div>
            <div class="label">{{ item.label }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  LockOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons-vue'

const metricRefs = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    },
    { threshold: 0.3 },
  )

  metricRefs.value.forEach((el) => observer.observe(el))
})

const metrics = [
  {
    value: '100% Aman',
    label: 'Data Terlindungi',
    desc: 'Semua informasi bisnis Anda tersimpan dengan aman, sehingga Anda bisa fokus mengembangkan usaha.',
    gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    icon: LockOutlined,
  },
  {
    value: 'Langsung Pakai',
    label: 'Sistem Siap Digunakan',
    desc: 'Sistem yang kami buat langsung bisa dipakai untuk operasional sehari-hari tanpa ribet.',
    gradient: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    icon: RocketOutlined,
  },
  {
    value: '< 24 Jam',
    label: 'Respon Cepat',
    desc: 'Jika ada kendala atau pertanyaan, tim kami siap membantu dengan cepat.',
    gradient: 'linear-gradient(135deg, #020617, #2563eb)',
    icon: ClockCircleOutlined,
  },
  {
    value: 'Stabil & Andal',
    label: 'Sistem Handal',
    desc: 'Sistem digital yang stabil dan lancar, mendukung bisnis Anda setiap hari.',
    gradient: 'linear-gradient(135deg, #7c3aed, #020617)',
    icon: SafetyCertificateOutlined,
  },
]
</script>

<style scoped>
.metrics {
  padding: 60px 24px;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.metric {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 260px;
  padding: 32px 24px;
  border-radius: 16px;
  color: #ffffff;
  opacity: 0;
  transform: translateY(28px) scale(0.95);
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: default;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  text-align: center;
}

.metric.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  animation: bounceIn 0.6s forwards;
}

@keyframes bounceIn {
  0% {
    transform: translateY(28px) scale(0.95);
  }
  60% {
    transform: translateY(-6px) scale(1.05);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

.metric-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.value {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
}

.label {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #ffffff;
}

.desc {
  font-size: 12px;
  line-height: 1.6;
}
</style>
