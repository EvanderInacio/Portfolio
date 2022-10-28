import styled from 'styled-components'

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .contact-content {
    border-radius: 10px;
    background-color: var(--border-color);
    padding: 1rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h4 {
      font-size: 1.3rem;
      margin-bottom: 8px;
    }

   span { 
    color: var(--text-secondary);
    &:hover {
      color: var(--first-color);
    }
   }
  }
  margin-bottom: 3rem;
`

export const Form = styled.form`
  text-align: center;
  display: flex;
  gap: 2px;
  flex-direction: column;

  .input-group {
    position: relative;
    margin: 10px 0;
    width: 90vw;
    max-width: 650px;
  }
  .input-group textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 150px;
  }

  .input {
    width: 100%;
    border: solid 2px var(--border-color);
    border-radius: 10px;
    background: var(--border-color);
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .user-label {
    position: absolute;
    text-align: center;
    left: 15px;
    color: #e8e8e8;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus,
  input:valid,
  textarea:valid {
    outline: none;
    border: 2px solid var(--second-color);
    background: var(--background);
  }

  .input:focus ~ label,
  input:valid ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: var(--background);
    padding: 0 0.8em;
    color: var(--first-color);
  }

`
