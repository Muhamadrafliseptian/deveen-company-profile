<template>
  <a-layout-header class="header">
    <RouterLink to="/" class="logo">
      <img src="@/assets/images/logo.png" alt="Deveen Business Systems" />
      <span style="color: white; font-size: 2vw; font-weight: bold">Harmoni Tech</span>
    </RouterLink>

    <!-- Desktop Menu -->
    <a-menu mode="horizontal" theme="dark" class="desktop-menu">
      <a-menu-item key="home"><RouterLink to="/">Home</RouterLink></a-menu-item>
      <!-- <a-menu-item key="about"><RouterLink to="/about">About</RouterLink></a-menu-item>
      <a-menu-item key="services"><RouterLink to="/services">Services</RouterLink></a-menu-item>
      <a-menu-item key="portfolio"><RouterLink to="/portfolio">Portfolio</RouterLink></a-menu-item> -->
      <a-menu-item key="contact"><RouterLink to="/contact">Contact</RouterLink></a-menu-item>
    </a-menu>

    <!-- Mobile Hamburger -->
    <a-button class="mobile-menu-btn" type="text" @click="drawerVisible = true">
      <MenuOutlined />
    </a-button>

    <!-- Drawer for mobile -->
    <a-drawer title="Menu" placement="right" :open="drawerVisible" @close="drawerVisible = false">
      <a-menu mode="vertical">
        <a-menu-item key="home" @click="drawerVisible = false"
          ><RouterLink to="/">Home</RouterLink></a-menu-item
        >
        <!-- <a-menu-item key="about" @click="drawerVisible = false"
          ><RouterLink to="/about">About</RouterLink></a-menu-item
        >
        <a-menu-item key="services" @click="drawerVisible = false"
          ><RouterLink to="/services">Services</RouterLink></a-menu-item
        >
        <a-menu-item key="portfolio" @click="drawerVisible = false"
          ><RouterLink to="/portfolio">Portfolio</RouterLink></a-menu-item
        > -->
        <a-menu-item key="contact" @click="drawerVisible = false"
          ><RouterLink to="/contact">Contact</RouterLink></a-menu-item
        >
      </a-menu>
    </a-drawer>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuOutlined } from '@ant-design/icons-vue'

const drawerVisible = ref(false)
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1px;
}

/* Logo */
.logo img {
  height: 100px;
}

/* Desktop menu */
.desktop-menu {
  flex: 1;
  justify-content: flex-end;
}

/* Mobile menu button hidden on desktop */
.mobile-menu-btn {
  display: none;
  font-size: 24px;
  color: #ffffff;
  border: none;
}

/* Media query for mobile */
@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-menu-btn {
    display: inline-flex;
  }
}
</style>
