import styled from 'styled-components'

export const ProjectContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const Banner = styled.div`
  position: relative;

  .bannerUrl {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    object-position: 0 30%;
    opacity: 0.5;
    border-bottom: 2px solid ${props => props.theme.border};
    box-shadow: ${props => props.theme.border} 0px 15px 30px 1px;

    @media (min-width: 768px) {
    height: 27rem;
    }

    @media (min-width: 994px) {
    height: 30rem;
    }
  }

  .bannerContainer {
    @media (min-width: 994px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .bannerContent {
    position: relative;
    bottom: 10rem;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    opacity: 1;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 3rem;
    }

    @media (min-width: 994px) {
      padding-left: 7rem;
    }

    @media (min-width: 1500px) {
      padding-left: 15%;
    }

    h1 {
      color: ${props => props.theme.white};
      font-weight: 800;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${props => props.theme.firstColor};
    }

    img {
      box-shadow: ${props => props.theme.border} 0 18px 40px 6px;
      width: 10rem;
      height: 10rem;
      border-radius: 10px;
      background: ${props => props.theme.backgroundSecond};

      @media (min-width: 768px) {
        width: 13rem;
        height: 13rem;
      }

      @media (min-width: 994px) {
        width: 16rem;
        height: 16rem;
      }
    }
  }

  .link {
    position: relative;
    bottom: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 468px) {
      flex-direction: row;
      justify-content: flex-end;
      align-items: end;
      gap: 1rem;
      right: 10%;
    }
    
    @media (min-width: 768px) {
      bottom: 10rem;
    }

    @media (min-width: 2000px) {
      right: 14%;
    }
  }
`

export const Description = styled.div`
  margin-top: -8rem;
  text-align: center;
  padding: 0 1rem;
  display: grid;
  justify-items: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: -5rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 1.8rem;
      max-width: 500px;

      @media (min-width: 994px) {
        font-size: 1.2rem;
        margin-bottom: 10rem;
        max-width: 800px;
        text-align: center;


      }
    }
  }

  .tags {
    border: 2px solid ${props => props.theme.border};
    box-shadow: ${props => props.theme.border} 0px 22px 40px 6px;
    border-radius: 10px;
    min-width: 12rem;
    padding: 1rem;
    background-color: ${props => props.theme.backgroundSecond};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) {
      width: 22rem;
      padding: 1rem 2rem;
    }

    h4 {
      font-size: 1.5rem;
      color: ${props => props.theme.firstColor};
      font-weight: 800;
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    .tag-content {
      display: flex;
      margin-bottom: 1rem;
      gap: 10px;

      img {
        width: 1.5rem;
      }

      @media (min-width: 994px) {
        font-size: 1.3rem;
        gap: 15px;
        text-align: center;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 1.8rem;
        }
      }
    }
  }
`

export const PrintContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 7rem;
  }
`

export const Print = styled.div`
  border: 5px solid ${props => props.theme.border};
  border-radius: 5px;
  box-shadow: ${props => props.theme.border} 0px 25px 40px 6px;
  width: 18rem;

  @media (min-width: 468px) {
    width: 25rem;
  }

  @media (min-width: 768px) {
    width: 35rem;
  }

  @media (min-width: 994px) {
    width: 50rem;
  }

`

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 7rem;
  }

  .buttonHome {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Video = styled.div`
  margin-bottom: 5rem;

  @media (min-width: 468px) {
    width: 25rem;
    height: 13rem;
  }
  @media (min-width: 768px) {
    width: 35rem;
    height: 20rem;
  }
  @media (min-width: 994px) {
    width: 40rem;
    height: 30rem;
  }
  @media (min-width: 1200px) {
    width: 51rem;
    height: 30rem;
  }
`
