<script setup>
import { onMounted, ref } from 'vue'

const visible = ref(false)
onMounted(() => setTimeout(() => (visible.value = true), 80))
</script>

<template>
  <section id="hero" class="hero">
    <div class="container hero__inner" :class="{ 'hero__inner--visible': visible }">
      <div class="hero__badge">
        <span class="hero__badge-dot" />
        {{ $t('hero.badge') }}
      </div>

      <h1 class="hero__title">
        {{ $t('hero.title_1') }} <span class="gradient-text">{{ $t('hero.title_2') }}</span> {{ $t('hero.title_3') }}
      </h1>

      <p class="hero__subtitle">
        {{ $t('hero.subtitle') }}
      </p>

      <div class="hero__actions">
        <a href="#contacto" class="btn btn--primary">
          {{ $t('hero.contact_us') }}
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#servicos" class="btn btn--ghost">
          {{ $t('hero.view_services') }}
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}

.hero__inner--visible {
  opacity: 1;
  transform: translateY(0);
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 28px;
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2.2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
}

.hero__title {
  font-size: clamp(32px, 5vw + 1rem, 70px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 22px;
}

.hero__subtitle {
  font-size: clamp(15px, 2vw, 18px);
  color: var(--text-secondary);
  max-width: 580px;
  line-height: 1.75;
  margin-bottom: 36px;
  font-weight: 500;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 48px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: var(--radius-card);
  text-decoration: none;
  transition: all var(--transition);
  cursor: pointer;
  border: none;
}

.btn--primary {
  background: var(--gradient);
  color: white;
  box-shadow: var(--shadow-accent);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37,99,235,0.3);
}

.btn--ghost {
  color: var(--text-secondary);
  border: 1.5px solid var(--border-strong);
  background: rgba(255, 255, 255, 0.03);
}

.btn--ghost:hover {
  color: var(--accent);
  border-color: var(--accent-border);
  background: var(--accent-dim);
}

@media (max-width: 768px) {
  .hero { padding: 100px 0 60px; text-align: center; }
  .hero__title { font-size: 34px; }
  .hero__subtitle { margin: 0 auto 32px; }
  .hero__actions { flex-direction: column; gap: 12px; }
  .btn { width: 100%; justify-content: center; }
}
</style>
