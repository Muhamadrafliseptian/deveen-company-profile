<template>
  <a-menu mode="horizontal" theme="dark">
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
</template>
