<template>
  <section class="cta">
    <div class="container">
      <a-row align="middle" justify="space-between" :gutter="[32, 32]">
        <a-col :xs="24" :md="16">
          <h2 class="title">{{ title }}</h2>
          <p class="subtitle">{{ subtitle }}</p>
          <div class="trust">
            <span>✓ Diskusi & Analisis Kebutuhan</span>
            <span>✓ Rekomendasi Teknologi yang Tepat</span>
            <span>✓ Pendekatan Bertahap & Realistis</span>
          </div>
        </a-col>

        <a-col :xs="24" :md="8" class="action">
          <a-button type="primary" size="large" class="cta-button" @click="goContact">
            {{ buttonText }}
          </a-button>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: 'Solusi Digital untuk Bisnis Anda',
  },
  subtitle: {
    type: String,
    default: 'Diskusikan kebutuhan bisnis Anda bersama tim kami secara gratis.',
  },
  buttonText: {
    type: String,
    default: 'Mulai Konsultasi',
  },
})

const router = useRouter()

const goContact = () => {
  router.push('/contact')
}
</script>

<style scoped>
.cta {
  position: relative;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  padding: 88px 64px;
  color: #ffffff;
  overflow: hidden;
}

/* Glow layer */
.cta::before {
  content: '';
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 60%);
  animation: pulse 6s ease-in-out infinite;
}

.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 17px;
  color: #e0e7ff;
  text-align: start;
}

/* Trust line */
.trust {
  margin-top: 16px;
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #dbeafe;
}

.trust span {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Action */
.action {
  text-align: right;
}

.cta-button {
  height: 52px;
  padding: 0 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 999px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
}

/* Glow animation */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .cta {
    padding: 64px 24px;
  }

  .title {
    font-size: 30px;
  }

  .action {
    text-align: left;
    margin-top: 24px;
  }

  .trust {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
