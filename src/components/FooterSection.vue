<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()

const quickLinks = computed(() => [
  { label: t('nav.home'), href: '#hero' },
  { label: t('nav.about'), href: '#sobre' },
  { label: t('nav.services'), href: '#servicos' },
  { label: t('nav.contact'), href: '#contacto' },
])

const services = computed(() => [
  t('services.list.s1_title'),
  t('services.list.s2_title'),
  t('services.list.s4_title'),
  t('services.list.s7_title'),
  t('services.list.s8_title'),
  t('services.list.s9_title'),
  t('services.list.s13_title'),
])
</script>

<template>
  <footer class="footer">
    <div class="footer__top-line" aria-hidden="true" />

    <div class="container footer__inner">
      <div class="footer__brand">
        <a href="#hero" class="footer__logo">
          <img src="/logo.png" alt="CIDIX Logo" class="footer__logo-img" />
        </a>
        <p class="footer__brand-text">
          {{ $t('footer.brand_text') }}
        </p>
        <div class="footer__contact-mini">
          <a href="mailto:Connect@cidixsolutios.com" class="footer__contact-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Connect@cidixsolutios.com
          </a>
          <a href="https://wa.me/244922806791" class="footer__contact-link" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.12 6.12l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {{ $t('contact.angola') }}: +244 922 806 791
          </a>
          <a href="tel:+18554824552" class="footer__contact-link" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.12 6.12l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {{ $t('contact.us') }}: +1 (855) 482-4552
          </a>
        </div>
      </div>

      <div class="footer__col">
        <h4 class="footer__col-title">{{ $t('footer.nav') }}</h4>
        <ul class="footer__links">
          <li v-for="link in quickLinks" :key="link.label">
            <a :href="link.href" class="footer__link">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div class="footer__col">
        <h4 class="footer__col-title">{{ $t('footer.services') }}</h4>
        <ul class="footer__links">
          <li v-for="s in services" :key="s">
            <a href="#servicos" class="footer__link">{{ s }}</a>
          </li>
        </ul>
      </div>

      <div class="footer__col">
        <h4 class="footer__col-title">{{ $t('footer.company') }}</h4>
        <ul class="footer__info">
          <li>
            <span class="footer__info-label" style="display: none;">{{ $t('footer.about') }}</span>
            <span class="footer__info-value" style="display: block; line-height: 1.5; font-size: 13px;">
              {{ $t('footer.about_text') }}
            </span>
          </li>

          <li>
            <span class="footer__info-label">{{ $t('footer.support') }}</span>
            <span class="footer__info-value">24/7</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">
          &copy; {{ year }} {{ $t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: var(--bg-secondary);
}

.footer__top-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 48px;
  padding-top: 64px;
  padding-bottom: 64px;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.footer__logo-img {
  height: 38px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.footer__logo-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}

.footer__brand-text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 280px;
}

.footer__contact-mini {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__contact-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition);
}

.footer__contact-link:hover { color: var(--accent-light); }

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__col-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  font-size: 14px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition);
}

.footer__link:hover { color: var(--text-secondary); }

.footer__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__info li {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.footer__info-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.footer__info-value {
  font-size: 14px;
  color: var(--text-secondary);
}

.footer__bottom {
  border-top: 1px solid var(--border);
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer__copy {
  font-size: 13px;
  color: var(--text-muted);
}

.footer__badges {
  display: flex;
  gap: 10px;
}

.footer__badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 5px 10px;
  border-radius: 100px;
}

@media (max-width: 1024px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .footer__brand { grid-column: 1 / -1; }
}

@media (max-width: 600px) {
  .footer__inner { grid-template-columns: 1fr; }
  .footer__brand { grid-column: auto; }
  .footer__bottom-inner {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
