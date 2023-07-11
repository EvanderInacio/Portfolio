import { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendContactMail } from '../../services/sendMail'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { ButtonSecondary } from '../../styles/styles'
import { FormContent } from './styles'
import { At, ChatText, TelegramLogo, User } from 'phosphor-react'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(2).max(1000)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Form() {
  const { register, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmits = async (event: FormEvent) => {
    event.preventDefault()
    
    try {
      await sendContactMail(name, email, message)
      toast.success('Mensagem enviada com sucesso!')
      setName('')
      setEmail('')
      setMessage('')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <FormContent onSubmit={onSubmits}>
      <div className="input-group">
        <input
          type="text"
          {...register('name')}
          onChange={({ target }) => setName(target.value)}
          name="name"
          id="name"
          autoComplete="name"
          placeholder=" "
          required
          className="input"
        />
        <label htmlFor="name" className="user-label">
          Nome{' '}
          <span>
            <User size={15} weight="bold" />
          </span>
        </label>
      </div>

      <div className="input-group">
        <input
          type="email"
          {...register('email')}
          onChange={({ target }) => setEmail(target.value)}
          required
          name="email"
          autoComplete="email"
          id="email"
          placeholder=" "
          className="input"
        />
        <label htmlFor="email" className="user-label">
          Email{' '}
          <span>
            <At size={15} weight="bold" />
          </span>
        </label>
      </div>

      <div className="input-group">
        <textarea
          {...register('message')}
          onChange={({ target }) => setMessage(target.value)}
          name="description"
          id="description"
          autoComplete="description"
          placeholder=" "
          required
          className="input"
        ></textarea>
        <label htmlFor="description" className="user-label">
          Mensagem{' '}
          <span>
            <ChatText size={15} weight="bold" />
          </span>
        </label>
      </div>

      <ButtonSecondary type="submit">
        Enviar <TelegramLogo size={15} weight="bold" />{' '}
      </ButtonSecondary>
    </FormContent>
  )
}
