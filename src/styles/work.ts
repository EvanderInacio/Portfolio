import styled from 'styled-components'

interface WorkProps {
  imgUrl: string
}

export const WorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const WorkBanner = styled.div<WorkProps>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;

  .bannerImg {
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    inset: 0;
    z-index: -10;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    h1 {
      color: ${props => props.theme.firstColor};
      font-size: 3rem;
    }
  }

  h2 {
    color: ${props => props.theme.secondColor};
    font-size: 1.3rem;
    font-weight: 500;
  }

  span {
    color: ${props => props.theme.gray};
    margin-bottom: 3rem;
  }

  p {
    text-align: center;
    max-width: 50rem;
    font-size: 1rem;
    color: ${props => props.theme.textPrimary};
    margin-bottom: 4rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    .tag {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => props.theme.backgroundSecond};
      padding: 0.25rem 0.75rem;
      color: ${props => props.theme.text};
      border-radius: 0.5rem;
    }
  }
`

export const WorkContent = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 0 1rem;

  @media (min-width: 994px) {
    gap: 10rem;
  }

  .print {
    position: relative;

    h3 {
      text-align: center;
      color: ${props => props.theme.firstColor};
      font-size: 3rem;
      margin-bottom: 0.5rem;

      @media (max-width: 468px) {
        font-size: 2rem;
      }
    }

    img {
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    p {
      @media (min-width: 994px) {
        position: absolute;
        bottom: -2.5rem;
        left: -2.5rem;
        z-index: 1;
        max-width: 35rem;
        background-color: ${props => props.theme.backgroundAlt};
        border-radius: 3px;
        padding: 1rem;
      }
      
      padding-top: 1rem;
      max-width: 40rem;
      color: ${props => props.theme.white};
    }
  }
`
