<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#sobre' },
  { key: 'services', href: '#servicos' },
  { key: 'contact', href: '#contacto' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled }]">
    <div class="navbar__bg" aria-hidden="true" />
    <div class="container navbar__inner">
      <a href="#hero" class="navbar__logo" @click="closeMenu">
        <img src="/logo.png" alt="CIDIX Logo" class="navbar__logo-img" />
      </a>

      <nav class="navbar__nav" :class="{ 'navbar__nav--open': menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.key"
          :href="link.href"
          class="navbar__link"
          @click="closeMenu"
        >{{ $t(`nav.${link.key}`) }}</a>
        
        <div class="navbar__lang">
          <a href="#" class="navbar__lang-btn" :class="{ active: $i18n.locale === 'pt' }" @click.prevent="$i18n.locale = 'pt'" aria-label="Português">
            <img src="https://flagcdn.com/pt.svg" width="20" height="15" alt="PT" />
          </a>
          <span class="navbar__lang-sep">|</span>
          <a href="#" class="navbar__lang-btn" :class="{ active: $i18n.locale === 'en' }" @click.prevent="$i18n.locale = 'en'" aria-label="English">
            <img src="https://flagcdn.com/us.svg" width="20" height="15" alt="EN" />
          </a>
        </div>

        <a href="#contacto" class="navbar__cta" @click="closeMenu">
          {{ $t('nav.contact_us') }}
        </a>
      </nav>

      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <div v-if="menuOpen" class="navbar__overlay" @click="closeMenu" />
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 18px 0;
  transition: all var(--transition);
}

.navbar__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  transition: all var(--transition);
}

.navbar--scrolled {
  padding: 12px 0;
}

.navbar--scrolled .navbar__bg {
  background: var(--bg-primary);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-img {
  height: 38px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.navbar__logo-name {
  font-size: 17px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 0.3px;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.navbar__link {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  transition: color var(--transition), background var(--transition);
  text-decoration: none;
}

.navbar__link:hover {
  color: var(--text-primary);
  background: var(--bg-secondary);
}

.navbar__lang {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  margin-right: 8px;
}

.navbar__lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity var(--transition);
  text-decoration: none;
}

.navbar__lang-btn img {
  border-radius: 2px;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.navbar__lang-btn:hover, .navbar__lang-btn.active {
  opacity: 1;
}

.navbar__lang-sep {
  color: var(--border-strong);
  font-size: 12px;
}

.navbar__cta {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  background: var(--gradient);
  padding: 9px 20px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: opacity var(--transition), transform var(--transition), box-shadow var(--transition);
  white-space: nowrap;
  box-shadow: var(--shadow-accent);
}

.navbar__cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(37,99,235,0.25);
}

.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
}

.navbar__burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition);
}

.navbar__burger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__burger--open span:nth-child(2) { opacity: 0; }
.navbar__burger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.navbar__overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 98;
  backdrop-filter: blur(2px);
}

@media (max-width: 768px) {
  .navbar__burger { display: flex; }
  .navbar__overlay { display: block; }

  .navbar__nav {
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
    padding: 40px;
    z-index: 99;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 12px;
  }

  .navbar__nav--open { right: 0; }

  .navbar__link {
    width: auto;
    font-size: 20px;
    font-weight: 700;
    padding: 12px 24px;
    text-align: center;
  }

  .navbar__cta {
    margin-left: 0;
    margin-top: 24px;
    width: min(200px, 80%);
    text-align: center;
    padding: 14px 20px;
    font-size: 16px;
  }
}
</style>
