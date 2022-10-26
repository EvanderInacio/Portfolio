import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
    padding-left: 2rem;
  }
`

export const ImgHome = styled.div`
  img {
    display: none;
    @media (min-width: 994px) {
      display: block;
      position: relative;
      width: 32rem;
      -webkit-animation: icon-move-people 4s ease 2s infinite alternate;
      animation: icon-move-people 5s ease 2s infinite alternate;

      @keyframes icon-move-people {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(30px, 60px, 0);
          transform: translate3d(-30px, -50px, 0);
        }
      }
    }
  }
`

export const HomeText = styled.div`
  h3 {
    color: var(--text-secondary);
    @media (max-width: 350px) {
      font-size: 0.9rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #1100ff;
    background: linear-gradient(to left, #1f1670, #9307f1, #7109e7, #00d9ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 350px) {
      font-size: 1.8rem;
    }
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
  h2 {
    @media (max-width: 350px) {
      font-size: 1.2rem;
    }
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
    color: #5252e0;
    font-weight: 600;
    animation: line 8s steps(40) infinite alternate,
      cursor 1s steps(40) infinite both;
    border-right: 4px solid #00d9ff;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 2rem;
    @keyframes cursor {
      from {
        border-right-color: #00d9ff;
      }
      to {
        border-right-color: transparent;
      }
    }
    @keyframes line {
      from {
        width: 0;
      }
      to {
        width: 13.7em;
      }
    }
  }
  .cubo-animation {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 4px solid #8543ff;

    @media (min-width: 994px) {
      width: 40px;
      height: 40px;
      border: 5px solid #8543ff;
    }

    top: 15%;
    animation: cubo 5s linear infinite;
    @keyframes cubo {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
