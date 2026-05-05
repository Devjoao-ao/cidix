<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const translatedPillars = computed(() => [
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: t('about.pillars.trust_title'),
    text: t('about.pillars.trust_desc'),
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
    title: t('about.pillars.innovation_title'),
    text: t('about.pillars.innovation_desc'),
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: t('about.pillars.proximity_title'),
    text: t('about.pillars.proximity_desc'),
  },
])
</script>

<template>
  <section id="sobre" class="about">
    <div class="about__divider" aria-hidden="true" />
    <div class="container">
      <div class="about__grid">
        <div class="about__content">
          <p class="section-label">{{ $t('about.label') }}</p>

          <h2 class="about__title">
            {{ $t('about.title_1') }} <span class="gradient-text">{{ $t('about.title_2') }}</span>
          </h2>

          <p class="about__text">
            {{ $t('about.text_1') }}
          </p>

          <p class="about__text">
            {{ $t('about.text_2') }}
          </p>

          <div class="about__pillars">
            <div v-for="p in translatedPillars" :key="p.title" class="pillar">
              <div class="pillar__icon" v-html="p.icon" />
              <div>
                <h3 class="pillar__title">{{ p.title }}</h3>
                <p class="pillar__text">{{ p.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 112px 0;
  position: relative;
}

.about__divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 112px;
}

.about__grid {
  max-width: 800px;
  margin: 0 auto;
}

.about__content { display: flex; flex-direction: column; }

.about__title {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.about__text {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 14px;
}

.about__pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.pillar {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  transition: all var(--transition);
}

.pillar:hover {
  border-color: var(--accent-border);
  transform: translateY(-2px);
  background: var(--bg-card-hover);
}

.pillar__icon {
  width: 34px;
  height: 34px;
  border-radius: var(--radius-sm);
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.pillar__title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3px;
}

.pillar__text {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about { padding: 60px 0; }
  .about__title { font-size: 32px; text-align: center; }
  .about__text { text-align: center; }
  .section-label { margin: 0 auto 18px; display: table; }
  .about__pillars { grid-template-columns: 1fr; gap: 24px; }
  .pillar { text-align: center; flex-direction: column; align-items: center; }
}
</style>
