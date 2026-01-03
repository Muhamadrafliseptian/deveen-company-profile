export const CheckoutService = {
  async checkoutCp(plan_id: number) {
    const res = await fetch(`/api/public/checkout`, {
      method: 'POST',
      body: JSON.stringify({ plan_id }),
    });
    return res.json();
  }
}

