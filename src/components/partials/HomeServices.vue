<template>
  <section class="section services">
    <h2 class="section-title">Our Services</h2>
    <p class="section-subtitle">
      We build digital products that help businesses scale efficiently.
    </p>

    <a-row :gutter="[32, 32]">
      <a-col :xs="24" :md="8">
        <a-card hoverable class="service-card">
          <div class="icon web" />
          <h3>Web Application</h3>
          <p>
            Custom, scalable, and high-performance web applications tailored to your business needs.
          </p>
        </a-card>
      </a-col>

      <a-col :xs="24" :md="8">
        <a-card hoverable class="service-card">
          <div class="icon system" />
          <h3>Business Systems</h3>
          <p>ERP, POS, and internal systems to streamline operations and improve efficiency.</p>
        </a-card>
      </a-col>

      <a-col :xs="24" :md="8">
        <a-card hoverable class="service-card">
          <div class="icon profile" />
          <h3>Company Profile</h3>
          <p>Professional and modern company profile websites that build trust and credibility.</p>
        </a-card>
      </a-col>
    </a-row>
  </section>
</template>

<style>
.services {
  text-align: center;
}
.section {
  padding: 25px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 18px;
}

.section-subtitle {
  max-width: 520px;
  margin: 0 auto 56px;
  color: #64748b;
  font-size: 16px;
}

/* Card */
.service-card {
  height: 100%;
  border-radius: 20px;
  padding: 10px 10px;
  text-align: left;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
}

/* Icon */
.icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  margin-bottom: 24px;
}

.icon.web {
  background: linear-gradient(135deg, #2563eb, #60a5fa);
}

.icon.system {
  background: linear-gradient(135deg, #7c3aed, #c084fc);
}

.icon.profile {
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
}

/* Typography */
.service-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.service-card p {
  color: #64748b;
  line-height: 1.7;
}

/* Mobile */
@media (max-width: 768px) {
  .service-card {
    text-align: center;
  }

  .icon {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
