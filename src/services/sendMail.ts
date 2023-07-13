import axios from 'axios'
import emailjs from '@emailjs/browser'

const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string
const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string
const user_id = process.env.NEXT_PUBLIC_EMAIL_USER_ID as string

export const sendContactMail = async (name: string, email: string, message: string) => {
  const data = { name, email, message }

  try {
    const templateParams = { from_name: name, email: email, message: message }

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then(response => {
        response.text
      })

    return await axios.post('/api/contact', data)
  } catch (err) {
    return err
  }
}
