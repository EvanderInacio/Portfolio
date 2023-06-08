import axios from "axios"
import emailjs from '@emailjs/browser'

export const sendContactMail = async (name: string, email: string, message: string) => {
  const data = {
    name,
    email,
    message
  }

  try {
    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs
      .send(
        'service_jhst058',
        'template_pkx6lhb',
        templateParams,
        'n4Rppqm4WIim8tvRd'
      )
      .then(response => {
        response.text
      })
      
    return await axios.post("/api/contact", data)
  } catch (err) {
    return err
  }
}
