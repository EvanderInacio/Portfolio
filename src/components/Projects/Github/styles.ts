import styled from 'styled-components'

export const AllContainer = styled.div`
  border-radius: 15px;
  background: ${props => props.theme.dark};
  border: 1px solid ${props => props.theme.border};
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
    color: ${props => props.theme.firstColor};
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
      background: rgba(1, 1, 1, 0.9);
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .face1 {
      transform: translateZ(50px);
    }

    .face2 {
      transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    }

    .face3 {
      transform: rotateY(90deg) translateZ(50px);
      img {
        transform: rotate(-90deg);  
      }
    }

    .face4 {
      transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    }

    .face5 {
      transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
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
