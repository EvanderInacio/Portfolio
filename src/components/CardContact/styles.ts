import styled from "styled-components";

export const CardContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`

export const CardContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;

  .description {
    h2 {
      color: ${props => props.theme.secondColor};
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;

      @media(min-width: 768px) {
        font-size: 2rem;  
      }
    }

    p {
      color: ${props => props.theme.gray};
      max-width: 35rem;
    }
  }

  .contact {
    img {
      width: 10rem;

      @media(min-width: 768px) {
        width: 20rem;
      }

      @media(min-width: 994px) {
        width: 30rem;
      }
    }
  }

  @media(min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

`