<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <article class="service-card">
    <div class="service-card__icon" v-html="icon" aria-hidden="true" />
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__desc">{{ description }}</p>
  </article>
</template>

<style scoped>
.service-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: default;
  transition: all var(--transition);
  overflow: hidden;
}

.service-card:hover {
  border-color: var(--accent-border);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md), var(--shadow-accent);
}

.service-card__icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  transition: all var(--transition);
  flex-shrink: 0;
}

.service-card:hover .service-card__icon {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  box-shadow: 0 4px 16px rgba(37,99,235,0.35);
}

.service-card__title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.service-card__desc {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}


</style>
