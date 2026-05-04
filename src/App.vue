<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="site-wrapper">
    <div class="site-bg" aria-hidden="true" />
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: var(--bg-primary);
}

.site-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 32px 32px;
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 100% 0%, #000 40%, transparent 90%);
  mask-image: radial-gradient(ellipse 80% 80% at 100% 0%, #000 40%, transparent 90%);
  pointer-events: none;
}

main { 
  flex: 1; 
  position: relative;
  z-index: 1;
}

nav, footer {
  position: relative;
  z-index: 2;
}
</style>
