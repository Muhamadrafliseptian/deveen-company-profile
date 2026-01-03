import api from '@/services/api'

export const CheckoutService = {
  /**
   * Create checkout & get Duitku payment URL
   * @param {Number} planId
   */
  async createCheckout(planId) {
    const response = await api.post('/checkout', {
      plan_id: planId,
    })

    return response.data
  },
}
