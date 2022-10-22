export function Contact() {
  return (
    <form action="https://formsubmit.co/evander.20112@hotmail.com" method="POST">
      <input placeholder="Nome" type="text" required/>
      <input placeholder="email" type="email" required/>
      <textarea name="mensagem" id="mensagem" required></textarea>

      <button type="submit">enviar</button>
    </form>
  )
}