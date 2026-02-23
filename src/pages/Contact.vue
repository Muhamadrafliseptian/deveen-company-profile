<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contact">
    <!-- HERO -->
    <section class="contact-hero">
      <div class="container">
        <h1 class="title">Hubungi Kami</h1>
        <p class="subtitle">
          Ceritakan kebutuhan bisnis Anda. Kami siap membantu merancang solusi digital yang tepat
          dan realistis.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="contact-content">
      <div class="container">
        <a-row :gutter="[48, 48]">
          <!-- FORM -->
          <a-col :xs="24" :md="14">
            <a-card class="form-card" bordered="false">
              <h3 class="form-title">Mulai Diskusi</h3>

              <a-form layout="vertical" :model="formState" @finish="submitForm">
                <a-form-item
                  label="Nama Lengkap"
                  name="name"
                  :rules="[{ required: true, message: 'Nama wajib diisi' }]"
                >
                  <a-input v-model:value="formState.name" placeholder="Nama Anda" />
                </a-form-item>

                <a-form-item
                  label="Email"
                  name="email"
                  :rules="[
                    { required: true, message: 'Email wajib diisi' },
                    { type: 'email', message: 'Format email tidak valid' },
                  ]"
                >
                  <a-input v-model:value="formState.email" placeholder="email@perusahaan.com" />
                </a-form-item>

                <a-form-item label="Perusahaan" name="company">
                  <a-input
                    v-model:value="formState.company"
                    placeholder="Nama perusahaan (opsional)"
                  />
                </a-form-item>

                <a-form-item
                  label="Kebutuhan / Tantangan Bisnis"
                  name="message"
                  :rules="[{ required: true, message: 'Pesan wajib diisi' }]"
                >
                  <a-textarea
                    v-model:value="formState.message"
                    :rows="4"
                    placeholder="Ceritakan kebutuhan sistem atau masalah yang ingin diselesaikan"
                  />
                </a-form-item>

                <a-button type="primary" size="large" html-type="submit" block>
                  Kirim & Mulai Konsultasi
                </a-button>
              </a-form>
            </a-card>
          </a-col>

          <!-- INFO -->
          <a-col :xs="24" :md="10">
            <div class="info">
              <h3 class="info-title">Kenapa Menghubungi Kami?</h3>

              <ul class="info-list">
                <li>✓ Konsultasi awal tanpa biaya</li>
                <li>✓ Fokus pada kebutuhan bisnis Anda</li>
                <li>✓ Solusi bertahap & scalable</li>
                <li>✓ Komunikasi jelas & transparan</li>
              </ul>

              <div class="contact-box">
                <p class="label">Email</p>
                <p class="value">harmonitech@gmail.com</p>

                <p class="label">Waktu Respons</p>
                <p class="value">&lt; 24 Jam Kerja</p>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formState = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
})

const submitForm = (values: any) => {
  console.log(values) // ← SEKARANG ADA ISINYA

  const subject = encodeURIComponent(`Konsultasi Bisnis – ${values.company || values.name}`)

  const body = encodeURIComponent(`
Nama       : ${values.name}
Email      : ${values.email}
Perusahaan : ${values.company || '-'}

Kebutuhan:
${values.message}
  `)

  window.location.href = `mailto:deveen.business@gmail.com?subject=${subject}&body=${body}`
}
</script>

<style>
.contact {
  width: 100%;
}

/* HERO */
.contact-hero {
  padding: 96px 24px;
  background: linear-gradient(180deg, #0b1220, #020617);
  color: #ffffff;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 17px;
  color: #cbd5f5;
  max-width: 640px;
  margin: 0 auto;
}

/* CONTENT */
.contact-content {
  padding: 96px 24px;
  background: #f8fafc;
}

.form-card {
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
}

.form-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
}

.info {
  padding: 12px;
}

.info-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
}

.info-list {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
  color: #374151;
}

.info-list li {
  margin-bottom: 10px;
}

.contact-box {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
}

.label {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 4px;
}

.value {
  font-weight: 600;
  margin-bottom: 16px;
}

/* MOBILE */
@media (max-width: 768px) {
  .title {
    font-size: 34px;
  }

  .contact-content {
    padding: 64px 24px;
  }
}
</style>
