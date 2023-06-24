import styled from 'styled-components'
import { rgba } from 'polished'

export const ProjectsContainer = styled.section`
  position: relative;

  .laptop {
    @media (max-width: 994px) {
      display: none;
    }

    width: 15rem;
    position: absolute;
    top: -20rem;

    /* animation: icons 5s ease 2s infinite alternate;
    @keyframes icons {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(10px);
      }
    } */
  }

  .pc {
    @media (max-width: 994px) {
      display: none;
    }

    width: 15rem;
    right: 0;
    position: absolute;
    top: -20rem;
  }
`

export const ProjectsContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .border {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;
    border-top: 1px solid ${props => props.theme.gray_easy};
  }
`

export const ProjectsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 2rem;

  @media (min-width: 994px) {
    flex-direction: row;
  }

  .banner {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  button {
    border: none;
    background: transparent;
    color: ${props => props.theme.gray};
    cursor: pointer;
    font-size: 1.1rem;
    display: flex;

    &:hover {
      color: ${props => props.theme.firstColor};
    }
  }

  .title {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${props => props.theme.white};
    }
  }

  .description {
    max-width: 30rem;

    p {
      margin: 1.5rem 0;
      color: ${props => props.theme.gray_easy};

      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      column-gap: 0.5rem;
      row-gap: 0.5rem;
      margin-bottom: 2.5rem;

      span {
        background: ${props => rgba(props.theme.color, 0.8)};
        padding: 0.25rem 0.75rem;
        color: ${props => props.theme.text};
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
`
