import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { z } from 'zod'

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
})

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL as string

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await req.body
    const { name, email, message } = bodySchema.parse(data)

    const messageData = {
      embeds: [
        {
          title: 'Mensagem de Contato',
          color:  0x00d9ff,
          fields: [
            {
              name: 'Nome',
              value: name,
              inline: true,
            },
            {
              name: 'E-mail',
              value: email,
              inline: true,
            },
            {
              name: 'Mensagem',
              value: message
            }
          ],
        }
      ]
    }

    await axios.post(WEBHOOK_URL, messageData)

    return res.send('')
  } catch (error) {
    return res.json({
      error: true,
      message: 'erro'
    })
  }
}
