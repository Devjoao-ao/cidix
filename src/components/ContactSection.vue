<script setup>
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | sending | success | error

const translatedContactItems = computed(() => [
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    label: t('contact.email'),
    value: 'Connect@cidixsolutios.com',
    href: 'mailto:Connect@cidixsolutios.com',
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.12 6.12l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    label: t('contact.angola'),
    value: '+244 922 806 791',
    href: 'https://wa.me/244922806791',
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.12 6.12l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    label: t('contact.us'),
    value: '+1 (855) 482-4552',
    href: 'tel:+18554824552',
  },

])

import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../emailjs.config'

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return
  status.value = 'sending'
  
  try {
    // Nota: Substitua os IDs abaixo pelos seus IDs reais do EmailJS (emailjs.com)
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'Connect@cidixsolutios.com'
      },
      EMAILJS_PUBLIC_KEY
    )
    
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    status.value = 'error'
    // Fallback para simulação se os IDs não estiverem configurados (apenas para teste)
    if (import.meta.env.DEV) {
      await new Promise(r => setTimeout(r, 1200))
      status.value = 'success'
    }
  }
}
</script>

<template>
  <section id="contacto" class="contact">
    <div class="contact__bg" aria-hidden="true" />

    <div class="container">
      <div class="contact__header">
        <p class="section-label">{{ $t('contact.label') }}</p>
        <h2 class="contact__title">
          {{ $t('contact.title_1') }}<br />
          <span class="gradient-text">{{ $t('contact.title_2') }}</span>
        </h2>
        <p class="contact__subtitle">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div class="contact__grid">
        <div class="contact__info">
          <div
            v-for="item in translatedContactItems"
            :key="item.label"
            class="contact__item"
          >
            <div class="contact__item-icon" v-html="item.icon" />
            <div class="contact__item-content">
              <span class="contact__item-label">{{ item.label }}</span>
              <a :href="item.href" class="contact__item-value" target="_blank" rel="noopener">
                {{ item.value }}
              </a>
            </div>
          </div>

          <div class="contact__note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {{ $t('contact.note') }}
          </div>
        </div>

        <form class="contact__form" @submit.prevent="handleSubmit" novalidate>
          <div v-if="status === 'success'" class="form-success">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>{{ $t('contact.form.success') }}</span>
          </div>

          <template v-else>
            <div class="form-group">
              <label class="form-label" for="name">{{ $t('contact.form.name') }}</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-input"
                :placeholder="$t('contact.form.name_ph')"
                required
                autocomplete="name"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="email">{{ $t('contact.form.email') }}</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-input"
                :placeholder="$t('contact.form.email_ph')"
                required
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="message">{{ $t('contact.form.message') }}</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-input form-textarea"
                :placeholder="$t('contact.form.message_ph')"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              class="form-submit"
              :disabled="status === 'sending'"
            >
              <span v-if="status === 'sending'" class="form-spinner" />
              <span v-else>{{ $t('contact.form.submit') }}</span>
              <svg v-if="status !== 'sending'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </template>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 120px 0;
  position: relative;
}

.contact__bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.contact::before {
  content: '';
  position: absolute;
  left: 0; right: 0; top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
}

.contact__header {
  text-align: center;
  max-width: 520px;
  margin: 0 auto 64px;
}

.contact__title {
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.contact__subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 48px;
  align-items: start;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition);
}

.contact__item:hover { border-color: var(--accent-border); }

.contact__item-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-light);
  flex-shrink: 0;
}

.contact__item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.contact__item-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact__item-value {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  word-break: break-word;
  transition: color var(--transition);
}

.contact__item-value:hover { color: var(--accent-light); }

.contact__note {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
  padding: 0 4px;
}

/* Form */
.contact__form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.form-input {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-family: inherit;
  font-size: 15px;
  color: var(--text-primary);
  outline: none;
  transition: border-color var(--transition), box-shadow var(--transition);
  width: 100%;
  resize: none;
}

.form-input::placeholder { color: var(--text-muted); }

.form-input:focus {
  border-color: var(--accent-border);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.form-textarea { min-height: 130px; }

.form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--gradient);
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--transition);
  box-shadow: 0 4px 20px rgba(59,130,246,0.25);
}

.form-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(59,130,246,0.4);
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px 20px;
  text-align: center;
  color: #4ade80;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 900px) {
  .contact { padding: 100px 0; }
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
