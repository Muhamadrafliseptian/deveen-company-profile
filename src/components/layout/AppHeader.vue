<template>
  <a-layout-header style="display: flex; align-items: center; padding: 0 24px">
    <div class="logo">
      <RouterLink to="/">
        <img src="@/assets/images/logo.png" alt="Deveen Business Systems" style="height: 100px" />
      </RouterLink>
    </div>

    <a-menu mode="horizontal" theme="dark" style="flex: 1; justify-content: flex-end">
      <a-menu-item key="home">
        <RouterLink to="/">Home</RouterLink>
      </a-menu-item>
      <a-menu-item key="about">
        <RouterLink to="/about">About</RouterLink>
      </a-menu-item>
      <a-menu-item key="services">
        <RouterLink to="/services">Services</RouterLink>
      </a-menu-item>
      <a-menu-item key="portfolio">
        <RouterLink to="/portfolio">Portfolio</RouterLink>
      </a-menu-item>
      <a-menu-item key="contact">
        <RouterLink to="/contact">Contact</RouterLink>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<style scoped>
.logo img {
  display: block;
  max-height: 100px;
}
</style>
