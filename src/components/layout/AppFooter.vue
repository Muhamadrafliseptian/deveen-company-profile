<template>
  <a-layout-footer class="footer">
    <div class="container">
      <a-row :gutter="[32, 32]">
        <!-- Brand -->
        <a-col :xs="24" :md="10">
          <h2 class="brand">Deveen Business Systems</h2>
          <p class="desc">
            Digital solutions for modern businesses. Helping companies grow through technology and
            innovation.
          </p>
        </a-col>

        <!-- Navigation -->
        <a-col :xs="24" :md="7">
          <h4 class="title">Company</h4>
          <ul class="links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </a-col>

        <!-- Contact -->
        <a-col :xs="24" :md="7">
          <h4 class="title">Contact</h4>
          <ul class="links">
            <li>Email: deveen.business@gmail.com</li>
            <li>Indonesia</li>
          </ul>
        </a-col>
      </a-row>

      <a-divider class="divider" />

      <div class="bottom">
        <span>© {{ year }} Deveen Business Systems</span>

        <div class="social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </div>
  </a-layout-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #0b1220 0%, #020617 100%);
  color: #e5e7eb;
  padding: 72px 24px 32px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.brand {
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
}

.desc {
  max-width: 420px;
  line-height: 1.7;
  color: #9ca3af;
}

.title {
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}

.links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links li {
  margin-bottom: 10px;
  color: #9ca3af;
}

.links a {
  color: #9ca3af;
  transition: color 0.2s ease;
}

.links a:hover {
  color: #ffffff;
}

.divider {
  border-color: rgba(255, 255, 255, 0.08);
  margin: 40px 0 24px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 14px;
  color: #9ca3af;
}

.social a {
  margin-left: 16px;
  color: #9ca3af;
  transition: color 0.2s ease;
}

.social a:hover {
  color: #ffffff;
}

/* Mobile */
@media (max-width: 768px) {
  .brand {
    font-size: 20px;
  }

  .bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .social a {
    margin-left: 0;
    margin-right: 16px;
  }
}
</style>
