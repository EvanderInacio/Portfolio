import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const Banner = styled.div`
  position: relative;

  .bannerUrl {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    object-position: 0 30%;
    opacity: 0.5;
    border-bottom: 5px solid #141317;
    box-shadow: #101012 0px 10px 30px 1px;
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

    h1 {
      color: #fff;
      font-weight: 800;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: #00d9ff;
    }

    img {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 22px 40px 6px;
      width: 15rem;
      border-radius: 10px;

      @media (min-width: 768px) {
        width: 18rem;
      }
    }
  }
`

export const Description = styled.div`
  margin-top: -5rem;
  text-align: center;
  padding: 0 1rem;
  display: grid;
  justify-items: center;
  align-items: center;

  @media (min-width: 768px) {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-end;
    align-items: center; */

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

      @media(min-width: 994px) {
        font-size: 1.3rem;
      }
    }
  }


  .tags {
    border: 2px solid #0c0b0e;
    box-shadow: #0c0b0e 0px 22px 40px 6px;
    border-radius: 10px;
    min-width: 12rem;
    padding: 1rem;
    background-color: #0c0b0e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 768px) {
      width: 22rem;
      padding: 1rem 2rem;
    }

    h4 {
      font-size: 1.5rem;
      color: #00d9ff;
      font-weight: 800;
      margin-bottom: 1.5rem;

      @media(min-width: 768px) {
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

      @media(min-width: 994px) {
        font-size: 1.3rem;
        gap: 15px;

        img {
          width: 2.2rem;
        }
      }
    } 
  }
`
