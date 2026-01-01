<template>
  <section class="metrics">
    <div class="container">
      <a-row :gutter="[32, 32]">
        <a-col v-for="(item, index) in metrics" :key="item.label" :xs="12" :md="6">
          <div ref="metricRefs" class="metric" :style="{ transitionDelay: `${index * 120}ms` }">
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
    value: '80%+',
    label: 'Target Code Coverage',
    desc: 'Pengujian otomatis sebagai bagian dari proses development',
  },
  {
    value: 'CI/CD',
    label: 'Pipeline Deployment',
    desc: 'Build, test, dan deployment otomatis',
  },
  {
    value: '< 24 Jam',
    label: 'Waktu Respons Awal',
    desc: 'Respons cepat untuk support dan penanganan issue',
  },
  {
    value: 'Security',
    label: 'Best Practices',
    desc: 'Autentikasi aman, proteksi data, dan kontrol akses',
  },
]
</script>

<style scoped>
.metrics {
  padding: 46px 24px;
  background: linear-gradient(180deg, #f8fafc, #ffffff);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.metric {
  padding: 24px;
  opacity: 0;
  transform: translateY(28px) scale(0.98);
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.metric.show {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.metric .value {
  font-size: 34px;
  font-weight: 700;
  color: #1677ff;
}

.metric .label {
  margin-top: 6px;
  font-weight: 600;
}

.metric .desc {
  margin-top: 6px;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}
</style>
