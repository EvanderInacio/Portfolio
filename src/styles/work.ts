import styled from 'styled-components'

interface WorkProps {
  imgUrl: string
}

export const WorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
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

export const WorkDescription = styled.div``

export const WorkContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5rem;
  margin-bottom: 5rem;
  position: relative;

  @media (min-width: 1000px) {
    margin-bottom: 15rem;
  }

  .workItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    border-radius: 10px;
    padding: 0 1rem;
    position: relative;

    img {
      border-radius: 5px;
      max-width: 1200px;
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      h3 {
        color: ${props => props.theme.firstColor};
        font-size: 1.8rem;
        margin-bottom: 0.5rem;

        @media (max-width: 468px) {
          font-size: 1.5rem;
        }
      }

      p {
        max-width: 35rem;
        color: ${props => props.theme.gray_light};
        margin-bottom: 1rem;
      }
    }

    @media (min-width: 1000px) {
      .text {
        position: absolute;
        bottom: -6rem;
        right: -2.5rem;
        transition: 0.5s;
        max-width: 40rem;
        z-index: 1;
        background-color: ${props => props.theme.backgroundAlt};
        border-radius: 3px;
        padding: 1rem;
        text-align: start;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    align-items: center;

    .workItem {
      .text {
        align-items: right;
        right: 0;
        left: -10rem;
      }
    }
  }
`
