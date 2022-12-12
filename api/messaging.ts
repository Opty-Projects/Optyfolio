import axios from 'axios'

export const notifyMe = async (data: Record<string, string>) => {
  return axios.post(process.env.NEXT_PUBLIC_NOTIFICATION_URL as string, data, {
    headers: { Accept: 'application/json' },
  })
}
