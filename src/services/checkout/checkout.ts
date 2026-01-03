import axios from 'axios'

export const CheckoutService = {
  async checkoutCp(plan_id: number) {
    const res = await axios.post(
      'https://6cb5f5349086.ngrok-free.app/api/checkout',
      { plan_id }
    )
    return res.data
  },
}
