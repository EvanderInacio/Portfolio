import styled from 'styled-components'

interface ProjectProps {
  imgUrl: string
}

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 5rem;
`

export const WorkContent = styled.div<ProjectProps>`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: flex-end;
  position: relative;
  
  &:hover {
    .workItem {
      .text {
        right: -13rem;
      }
      .overlay {
        opacity: 0.4;
      }
    }

    button a {
      color: ${props => props.theme.firstColor};
    }
  }
  
  .workItem {
    width: 50rem;
    height: 100%;
    position: relative;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    border-radius: 10px;

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.backgroundSecond};
      opacity: 0.75;
      transition: 0.5s;
    }

    .text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content;

      h1 {
        color: ${props => props.theme.firstColor};
        font-size: 3rem;
        text-shadow: -4px 5px 22px #090d1a;
      }

      h2 {
        color: ${props => props.theme.secondColor};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #090d1a;
      }
    }
  }

  button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;
    cursor: pointer;

    a {
      color: ${props => props.theme.gray};
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }

    &:hover {
      color: ${props => props.theme.firstColor};
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    button {
      margin: 3rem 5rem 0 0;
    }

    .workItem {
      .text {
        align-items: right;
        right: 0;
        left: -10rem;
      }
    }

    &:hover {
      .workItem {
        .text {
          left: -13rem;
        }
      }
    }
  }

  @media (max-width: 1300px) {
    .workItem {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    .workItem {
      width: 90vw;

      .text {
        left: 1rem;
        top: 1rem;
      }
    }

    button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      .workItem {
        width: 100%;

        .text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        .workItem .text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    .workItem {
      .text {
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
`
