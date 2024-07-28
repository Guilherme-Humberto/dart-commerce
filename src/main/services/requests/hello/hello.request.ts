import { AxiosHttpClient } from '../../http/axios.http-client'

export const sendHello = async () => {
  try {
    const axiosClient = new AxiosHttpClient()
    return await axiosClient.request({
      url: `${process.env.REACT_APP_SEND_EMAIL_SERVICE_URL}/send-email/welcome`,
      method: 'get'
    })
  } catch (error) {
    throw error
  }
}
