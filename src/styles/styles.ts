import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

export const Container = styled.section`
  padding-top: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h2`
  position: relative;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 2rem 0;
  padding-top: 2.1rem;
  color: ${props => props.theme.firstColor};
  z-index: 1;
  opacity: 1;

  @media (min-width: 994px) {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.25rem;
    font-family: monospace;
    position: absolute;
    text-align: center;
    top: -1.5rem;
    color: ${props => props.theme.secondColor};
  }

  span {
    z-index: -1;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    left: 50%;
    right: 50%;
    color: ${props => props.theme.secondColor};
    opacity: 0.2;
    font-weight: 800;
    font-size: 2.6rem;

    @media (min-width: 370px) {
      top: -0.8rem;
      font-size: 3rem;
    }

    @media (min-width: 994px) {
      top: -0.8rem;
      font-size: 4.5rem;
    }
  }

  .vector {
    position: absolute;
    width: 2rem;
    bottom: 5rem;
    z-index: -10;

    animation: bounce 1s infinite;

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    @media (min-width: 468px) {
      bottom: 7rem;
      width: 3rem;
    }

    @media (min-width: 944px) {
      width: 5rem;
    }

    @media (min-width: 1300px) {
      width: 8rem;
      bottom: 7.5rem;
    }
  }
`

export const Description = styled.h4`
  margin-top: -5rem;
  margin-bottom: 3rem;
  max-width: 35rem;
  text-align: start;
  padding: 0 1rem;
  color: ${props => props.theme.gray};
`

export const Button = styled.button`
  background: ${props => props.theme.secondColor};
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  gap: 0.4rem;

  &:hover {
    background: ${props => props.theme.hoverSecond};
  }
`

export const ButtonPrimary = styled.button`
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.textPrimary};
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 2rem;
  border: 2px solid;
  border-radius: 5px;
  border-image: linear-gradient(225deg, #00d9ff 0%, #c001fa 100%) 1;
  display: block;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scale(0);
  }

  &:hover {
    color: ${props => props.theme.dark};
    &:before {
      transform: scale(1);
      background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
    }
  }

  .btn {
    &::before {
      transform: scaleX(0);
    }

    &:hover {
      color: ${props => props.theme.dark};
      &:before {
        transform: scaleX(1);
        background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
      }
    }
  }
`

export const ButtonSecondary = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin: 50px auto;
  border: 0.25em solid ${props => props.theme.firstColor};
  padding: 1rem 2rem;
  color: ${props => props.theme.text};
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em ${props => props.theme.secondColor},
    0 0 4em 1em ${props => props.theme.firstColor} inset 0 0 0.75em 0.25em
      ${props => props.theme.secondColor};
  position: relative;
  transition: all 0.3s;

  &::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.firstColor};
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    cursor: pointer;
    color: black;
    background-color: ${props => props.theme.white};
    box-shadow: 0 0 1em 0.25em ${props => props.theme.hover},
      0 0 4em 2em ${props => props.theme.hover},
      inset 0 0 0.75em 0.25em ${props => props.theme.white};
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em ${props => props.theme.hover},
      0 0 2.5em 2em ${props => props.theme.hover},
      inset 0 0 0.5em 0.25em ${props => props.theme.white};
  }
`

export const ButtonAlt = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 7px;
  cursor: pointer;
  border: 0.25em solid ${props => props.theme.secondColor};
  padding: 1rem 2rem;
  color: ${props => props.theme.text};
  font-size: 1rem;
  font-weight: 700;
  background-color: transparent;
  border-radius: 1em;
  outline: none;
  position: relative;
  transition: all 0.3s;

  &:hover {
    color: black;
    background-color: ${props => props.theme.white};
    box-shadow: 0 0 1em 0.25em ${props => props.theme.hoverSecond},
      0 0 4em 2em ${props => props.theme.hoverSecond},
      inset 0 0 0.75em 0.25em ${props => props.theme.white};
  }
`

export const ButtonSecondAlt = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  gap: 5px;
  background: transparent;
  border: 0.25em solid ${props => props.theme.firstColor};
  border-radius: 10px;
  color: ${props => props.theme.white};
  cursor: pointer;

  &:hover {
    color: black;
    background-color: ${props => props.theme.firstColor};
  }
`

export const ButtonAlternatives = styled.button`
  border: none;
  background: transparent;
  color: ${props => props.theme.gray};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  border-bottom-width: 0;
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#00d9ff, #00d9ff);

  &:hover {
    color: ${props => props.theme.firstColor};
    background-size: 100% 3px;
    background-position: 0 100%;
  }
`
