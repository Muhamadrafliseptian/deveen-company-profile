<template>
  <section class="cta">
    <div class="container">
      <a-row align="middle" justify="space-between" :gutter="[32, 32]">
        <a-col :xs="24" :md="16">
          <h2 class="title">{{ title }}</h2>
          <p class="subtitle">{{ subtitle }}</p>
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
    default: 'Let’s Build Your Digital Solution',
  },
  subtitle: {
    type: String,
    default: 'Start transforming your business today.',
  },
  buttonText: {
    type: String,
    default: 'Contact Us',
  },
})

const router = useRouter()
const goContact = () => router.push('/contact')
</script>

<style scoped>
.cta {
  background: #0f172a; /* dark slate */
  padding: 72px 24px;
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 16px;
  color: #cbd5f5;
}

.action {
  text-align: right;
}

.cta-button {
  height: 48px;
  padding: 0 32px;
  font-size: 16px;
  border-radius: 999px;
}

/* Mobile */
@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }

  .action {
    text-align: left;
  }
}
</style>
