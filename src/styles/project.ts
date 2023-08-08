import styled from 'styled-components'

export const ProjectContainer = styled.main`
  display: flex;
  flex-direction: column;

  .allProjects {
    margin: 0 auto;
    margin-bottom: 5rem;
  }
`

export const Banner = styled.div`
  position: relative;
  margin-bottom: 6rem;

  .bannerUrl {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    object-position: 0 30%;
    border-bottom: 1px solid ${props => props.theme.border};

    @media (min-width: 768px) {
      height: 27rem;
    }

    @media (min-width: 994px) {
      height: 28rem;
    }
  }

  .bannerContainer {
    @media (min-width: 1300px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .bannerContent {
    position: relative;
    bottom: 5rem;
    z-index: 2;
    margin-bottom: 2rem;

    @media (min-width: 994px) {
      bottom: 7.5rem;
      margin-bottom: 3rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      padding-left: 3rem;
    }

    @media (min-width: 994px) {
      padding-left: 7rem;
    }

    @media (min-width: 1500px) {
      padding-left: 15%;
    }

    h1 {
      color: ${props => props.theme.text};
      font-weight: 800;
      font-size: 2rem;

      @media (min-width: 768px) {
        font-size: 2.7rem;
      }
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }

      font-weight: 600;
      color: ${props => props.theme.firstColor};
    }

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 10px;
      padding: 1rem;
      background: ${props => props.theme.backgroundAlt};
      border: 1px solid ${props => props.theme.borderSecond};
      mix-blend-mode: multiply;

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
    bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (min-width: 468px) {
      flex-direction: row;
      align-items: end;
      justify-content: center;
    }

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }

    @media (min-width: 1300px) {
      bottom: 8.8rem;
      right: 3%;
    }

    @media (min-width: 2000px) {
      right: 14%;
    }
  }
`

export const DescriptionProject = styled.div`
  margin-top: -8rem;
  text-align: center;
  padding: 0 1rem;
  display: grid;
  justify-items: center;
  align-items: center;

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
    border: 1px solid ${props => props.theme.border};
    border-radius: 10px;
    min-width: 12rem;
    padding: 1rem;
    background-color: ${props => props.theme.dark};
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

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;

  h4 {
    padding-top: 2.3rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2rem;
`

export const TagsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  .card-icon {
    padding: 1rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;

    img {
      border-radius: 0.25rem;
      width: 40px;
    }
    &:hover {
      transform: scale(0.9);
      border-color: transparent !important;
    }
    &:active {
      transform: scale(0.8);
      border-color: transparent !important;
    }
  }

  h3 {
    
    color: ${(props) => props.color};
  }
`

export const PrintContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: start;
  
  margin-top: 3rem;
  margin-bottom: 14rem;

  @media (min-width: 768px) {
    margin-top: 7rem;
  }
`

export const PrintContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(min-width: 1300px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`

export const Gif = styled.div`
  padding: 3rem 1rem 0 1rem;
  margin: 0 auto;
  
  @media(min-width: 1300px) {
    display: inline-block;
    position: sticky;
    top: 1px;
    max-width: 500px;
    max-height: 650px;
  }

  h2 {
    color: ${props => props.theme.secondColor};
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  
  p {
    color: ${props => props.theme.gray};
    font-size: 1.1rem;
    
    span {
      color: ${props => props.theme.emerald_400};
      font-weight: 600;
    }
  }

  h5 {
    margin-top: 2rem;
    color: ${props => props.theme.gray_medium};
    font-size: 1rem;
  }

  .preview {
    width: 15rem;
    border-radius: 4px;

    @media (min-width: 468px) {
      width: 25rem;
    }

    @media (min-width: 768px) {
      width: 28rem;
    }

    @media (min-width: 1300px) {
      width: 30rem;
    }
  }
`

export const Print = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .print-list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      object-fit: contain;
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }

    h3 {
      color: ${props => props.theme.secondColor};
      margin-top: 3.7rem;
      font-size: 1.5rem;
      font-weight: 700;

      @media(min-width: 768px) {
        font-size: 2rem;
      }
    }
  
    p {
      color: ${props => props.theme.gray};
      padding: 0 1rem;
      margin-bottom: .4rem;
    }
  }

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
  position: relative;
  margin-top: 5rem;
  margin-bottom: 10rem;
  border-top: 2px solid ${props => props.theme.dark};
  border-bottom: 2px solid ${props => props.theme.dark};


  @media(min-width: 468px) {
    margin-top: 10rem;
  }

  .buttonHome {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imageVideo {
    @media(max-width: 468px) {
      display: none;
    }
    img {
      z-index: -1;
      width: 100%;
      opacity: 0.5;
      object-fit: cover;
    }
  }

  .title-video {
    z-index: 10;
    position: absolute;
    top: -15rem;

    @media(min-width: 468px) {
      top: -10rem;
    }
  }
`

export const Video = styled.div`
  //margin-bottom: 5rem;
  z-index: 10;
  position: absolute;
  opacity: 1;

  @media (min-width: 468px) {
    width: 25rem;
    height: 13.3rem;
  }
  @media (min-width: 768px) {
    width: 35rem;
    height: 18.6rem;
  }
  @media (min-width: 994px) {
    width: 40rem;
    height: 21.2rem;
  }
  @media (min-width: 1200px) {
    width: 60rem;
    height: 32.1rem;
  }
`
