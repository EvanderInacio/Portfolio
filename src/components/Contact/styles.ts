import styled from "styled-components";

export const Container = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

export const Form = styled.form`
  text-align: center;
  display: flex;
  gap: 2px;
  flex-direction: column;

  .input-group {
    position: relative;
    margin: 10px 0 ;
    width: 95vw;
    max-width: 500px;
  }
  .input-group textarea{
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 100px;
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

  .input:focus, input:valid, 
  textarea:valid {
    outline: none;
    border: 2px solid var(--second-color);
    background: var(--background);
  }

  .input:focus ~ label,
  input:valid ~ label, input:not(:placeholder-shown) ~ label , textarea:valid ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: var(--background);
    padding: 0 0.8em;
    color: var(--first-color);
  }
  
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    text-align: center;
    margin: 50px auto;
    border: 0.25em solid var(--first-color);
    padding: 1em 3em;
    color: var(--white);
    font-size: 15px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 1em;
    outline: none;
    box-shadow: 0 0 1em 0.25em var(--second-color),
      0 0 4em 1em var(--first-color)
      inset 0 0 0.75em 0.25em var(--second-color);
    position: relative;
    transition: all 0.3s;
  }

  button::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--first-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  button:hover {
    color: black;
    background-color: var(--white);
    box-shadow: 0 0 1em 0.25em var(--white),
      0 0 4em 2em var(--hover-color),
      inset 0 0 0.75em 0.25em var(--white);
  }

  button:active {
    box-shadow: 0 0 0.6em 0.25em var(--white),
      0 0 2.5em 2em var(--hover-color),
      inset 0 0 0.5em 0.25em var(--white);
  }
`