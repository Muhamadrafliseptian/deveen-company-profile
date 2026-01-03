<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a-layout style="min-height: 100vh; background: #f5f7fa">
    <a-layout-content style="padding: 48px 24px">
      <div style="text-align: center; margin-bottom: 40px">
        <a-typography-title level="2">Pricing</a-typography-title>
        <a-typography-text type="secondary">
          Simple pricing for managed company profile websites
        </a-typography-text>
      </div>

      <a-row justify="center" :gutter="[32, 32]">
        <a-col v-for="plan in plans" :key="plan.id" :xs="24" :sm="12" :md="8">
          <a-card
            hoverable
            :bordered="false"
            style="
              border-radius: 14px;
              overflow: hidden;
              height: 100%;
              box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
            "
          >
            <div
              style="
                background: linear-gradient(135deg, #1677ff, #4096ff);
                padding: 20px;
                color: #fff;
              "
            >
              <a-typography-title level="4" style="color: #fff; margin-bottom: 4px">
                {{ plan.name }}
              </a-typography-title>
              <a-typography-text style="color: rgba(255, 255, 255, 0.85)">
                Managed Website
              </a-typography-text>
            </div>

            <!-- Card Body -->
            <div style="padding: 24px">
              <!-- Price -->
              <div
                style="
                  text-align: center;
                  background: #f0f5ff;
                  border-radius: 10px;
                  padding: 16px;
                  margin-bottom: 20px;
                "
              >
                <a-typography-title level="3" style="margin-bottom: 0">
                  {{ plan.price_formatted }}
                </a-typography-title>
                <a-typography-text type="secondary"> per month </a-typography-text>
              </div>

              <a-typography-paragraph style="text-align: center">
                {{ plan.description }}
              </a-typography-paragraph>

              <a-divider />

              <a-space direction="vertical" size="small">
                <a-text>✔ Subdomain based</a-text>
                <a-text>✔ Category-based templates</a-text>
                <a-text>✔ CMS access</a-text>
                <a-text>✔ Technical support</a-text>
              </a-space>

              <a-button
                type="primary"
                block
                size="large"
                style="margin-top: 24px"
                :loading="loading"
                @click="goToCheckout(plan.id)"
              >
                Get Started
              </a-button>
            </div>
          </a-card>
        </a-col>
      </a-row>

      <!-- Loading -->
      <div v-if="loading" style="text-align: center; margin-top: 48px">
        <a-spin size="large" />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import { CheckoutService } from '@/services/checkout/checkout'
import { PlanService } from '@/services/plans/plans'

const messages = message

const plans = ref<any[]>([])
const loading = ref(false)

onMounted(async () => {
  try {
    const res = await PlanService.getActivePlan()
    plans.value = res.data
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

const goToCheckout = async (planId: number) => {
  loading.value = true

  try {
    const res = await CheckoutService.createCheckout(planId)

    if (res.success && res.data?.payment_url) {
      window.location.href = res.data.payment_url
    } else {
      messages.error('Gagal memproses pembayaran')
    }
  } catch (error) {
    console.error(error)
    messages.error('Terjadi kesalahan saat checkout')
  } finally {
    loading.value = false
  }
}
</script>
