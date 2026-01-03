import axios from 'axios'

const API_URL = 'https://6cb5f5349086.ngrok-free.app/api/public'

export const PlanService = {
  async getActivePlan() {
    try {
      const response = await axios.post(`${API_URL}/plans`)
      return response.data
    } catch (error) {
      console.error('Failed to fetch plan:', error)
      throw error
    }
  },
}
