<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <a-row align="middle" :gutter="[32, 32]">
        <a-col :xs="24" :md="12">
          <h1 class="hero-title">
            Digital Solutions<br />
            for Modern Businesses
          </h1>
          <p class="hero-desc">
            Deveen Business Systems helps companies build scalable systems, automate operations, and
            grow through technology.
          </p>
          <a-space>
            <a-button type="primary" size="large"> Get Started </a-button>
            <a-button size="large"> Our Services </a-button>
          </a-space>
        </a-col>

        <a-col :xs="24" :md="12" class="hero-visual">
          <div class="hero-box" />
        </a-col>
      </a-row>
    </section>

    <!-- SERVICES -->
    <HomeServices />

    <!-- CTA -->
    <CallToAction />
  </div>
</template>

<script lang="ts" setup>
import HomeServices from '@/components/partials/HomeServices.vue'
import CallToAction from '@/components/partials/CallToAction.vue'
</script>

<style scoped>
.home {
  width: 100%;
}

/* HERO */
.hero {
  padding: 50px;
  background: linear-gradient(180deg, #0b1220, #020617);
  color: #ffffff;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero-desc {
  max-width: 520px;
  font-size: 16px;
  line-height: 1.7;
  color: #cbd5f5;
  margin-bottom: 32px;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.hero-box {
  width: 100%;
  max-width: 420px;
  height: 280px;
  border-radius: 16px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  opacity: 0.9;
}

/* CTA */
.cta {
  text-align: center;
  padding: 96px 24px;
  background: #f8fafc;
}

.cta h2 {
  font-size: 32px;
  margin-bottom: 16px;
}

.cta p {
  margin-bottom: 32px;
  color: #64748b;
}

/* MOBILE */
@media (max-width: 768px) {
  .hero {
    padding: 80px 24px;
  }

  .hero-title {
    font-size: 36px;
  }

  .section {
    padding: 64px 24px;
  }
}
</style>
