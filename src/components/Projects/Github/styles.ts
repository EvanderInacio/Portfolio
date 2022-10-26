import styled from 'styled-components'

export const AllContainer = styled.div`
  border-radius: 15px;
  background: #0c0b0e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  padding-bottom: 5rem;
  max-width: 700px;

  h4 {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-weight: 900;
    font-size: 1.8rem;
    text-align: center;
    color: #00d9ff;
  }
`

export const AllContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    padding-left: 2rem;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    text-align: center;
    border: 0.25em solid var(--second-color);
    padding: 1em 3em;
    color: var(--white);
    font-size: 15px;
    font-weight: 700;
    background-color: transparent;
    border-radius: 1em;
    outline: none;
    position: relative;
    transition: all 0.3s;
  }

  button:hover {
    color: black;
    background-color: var(--white);
    box-shadow: 0 0 1em 0.25em var(--hover-second-color), 0 0 4em 2em var(--hover-second-color),
      inset 0 0 0.75em 0.25em var(--white);
  }

`

export const Cubo = styled.div`
  position: relative;
  padding-bottom: 5rem;

  .stage-cube-cont {
    position: absolute;

    @media (min-width: 768px) {
      left: 3rem;
    }
  }

  .cubespinner {
    animation: spincube 13s ease-in-out infinite;
    transform-style: preserve-3d;
    transform-origin: 50px 50px 0;
    margin-left: calc(50% - 50px);

    &:hover {
      animation-play-state: paused;
    }

    img {
      width: 4rem;
    }

    div {
      position: absolute;
      width: 100px;
      height: 100px;
      border: 2px solid #1e1e25;
      background: rgba(1, 1, 1, 0.4);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .face1 {
      transform: translateZ(50px);
    }
    .face2 {
      transform: rotateY(90deg) translateZ(50px);
    }
    .face3 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    }
    .face4 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
    }
    .face5 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    }
    .face6 {
      transform: rotateX(-90deg) translateZ(50px);
    }
  }

  @keyframes spincube {
    from,
    to {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
      transform: rotateY(-90deg) rotateZ(90deg);
    }
    33% {
      transform: rotateY(-90deg) rotateX(90deg);
    }
    50% {
      transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
      transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
      transform: rotateX(90deg);
    }
  }
`
