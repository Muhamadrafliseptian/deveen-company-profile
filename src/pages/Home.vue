<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <section class="hero">
      <a-row align="middle" :gutter="[32, 32]">
        <a-col :xs="24" :md="12">
          <h1 class="hero-title">
            Bikin Bisnis Lebih Rapi<br />
            dengan Sistem Digital
          </h1>

          <p class="hero-desc">
            Kami membantu bisnis beralih dari cara manual ke sistem digital agar pekerjaan lebih
            cepat, data lebih aman, dan usaha lebih mudah berkembang.
          </p>

          <a-space>
            <a-button type="primary" size="large">Mulai Konsultasi</a-button>
            <!-- <a-button size="large">Lihat Layanan</a-button> -->
          </a-space>
        </a-col>

        <a-col :xs="24" :md="12" class="hero-visual">
          <div class="hero-box">
            <div
              class="system-card logo"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                animation-delay: 1.2s;
              "
            >
              <div bordered="false">
                <img src="@/assets/images/icons/firebase.png" alt="Deveen Business Systems" />
              </div>
            </div>
            <a-row style="display: flex; justify-content: space-between" :gutter="[20]">
              <a-col
                class="system-card logo"
                style="display: flex; animation-delay: 0.6s; flex: 1; justify-content: center"
              >
                <img
                  src="@/assets/images/icons/aws.png"
                  alt="Deveen Business Systems"
                  style="width: 100%; object-fit: contain"
                />
              </a-col>
              <a-col
                class="system-card logo"
                style="display: flex; animation-delay: 0.6s; flex: 1; justify-content: center"
              >
                <img
                  src="@/assets/images/icons/google-cloud.png"
                  alt="Deveen Business Systems"
                  style="width: 100%; object-fit: contain"
                />
              </a-col>
            </a-row>
            <div
              class="system-card logo"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                animation-delay: 0.5s;
              "
            >
              <div bordered="false">
                <img
                  src="@/assets/images/icons/google-playstore.png"
                  alt="Deveen Business Systems"
                />
              </div>
            </div>
          </div>
        </a-col>
        <!-- <a-col :xs="24" :md="12" class="hero-visual">
          <div class="hero-box system-visual">
            <div class="system-card company logo" bordered="false">
              <img src="@/assets/images/icons/google-cloud.png" alt="Deveen Business Systems" />
            </div>

            <div class="system-card pos logo" bordered="false">
              <img src="@/assets/images/icons/firebase.png" alt="Deveen Business Systems" />
            </div>

            <div class="system-card hr logo" bordered="false">
              <img src="@/assets/images/icons/aws.png" alt="Deveen Business Systems" />
            </div>

            <div class="system-card wh logo" bordered="false">
              <img src="@/assets/images/icons/google-playstore.png" alt="Deveen Business Systems" />
            </div>
          </div>
        </a-col> -->
      </a-row>
    </section>

    <HomeServices />
    <HomeMetrics />
    <!-- <HomeWhyUs /> -->
    <HomeDeliverables />
    <!-- <HomeProcess /> -->
    <CallToAction />
  </div>
</template>

<script lang="ts" setup>
import HomeServices from '@/components/partials/HomeServices.vue'
import CallToAction from '@/components/partials/CallToAction.vue'
import HomeMetrics from '@/components/partials/HomeMetrics.vue'
import HomeWhyUs from '@/components/partials/HomeWhyUs.vue'
import HomeDeliverables from '@/components/partials/HomeDeliverables.vue'
import HomeProcess from '@/components/partials/HomeProcess.vue'
import { GlobalOutlined, ShopOutlined, TeamOutlined, DatabaseOutlined } from '@ant-design/icons-vue'

const props = {}
</script>

<style scoped>
.home {
  width: 100%;
}

.logo img {
  height: 130px;
  /* animation: float 6s ease-in-out infinite; */
}

/* HERO */
.hero {
  padding: 50px;
  background: linear-gradient(180deg, #0b1220, #020617);
  color: #ffffff;
}

.system-visual {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 300px;
}

.system-card {
  /* position: absolute;
  width: 150px;
  text-align: center;
  border-radius: 14px;
  color: #fff;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35); */
  animation: float 6s ease-in-out infinite;
}

.system-card span {
  display: block;
  margin-top: 8px;
  font-weight: 600;
}

.system-card .anticon {
  font-size: 26px;
}

/* Positioning */
.company {
  top: 10px;
  left: 135px;
  /* background: rgba(124, 58, 237, 0.7); */
  animation-delay: 0s;
}

.pos {
  top: 80px;
  left: 10px;
  animation-delay: 0.6s;
}

.hr {
  top: 80px;
  right: 10px;
  animation-delay: 1.2s;
}

.wh {
  top: 160px;
  left: 135px;
  animation-delay: 0s;
}

/* Float */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@media (max-width: 768px) {
  .system-visual {
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .system-card {
    position: static;
    animation: none;
    width: 100%;
  }
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
  display: grid;
  /* justify-content: center; */
  align-items: center;
}

.hero-box {
  width: 100%;
  /* max-width: 420px; */
  border-radius: 16px;
  /* background: linear-gradient(135deg, #2563eb, #7c3aed); */
  opacity: 0.9;
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
