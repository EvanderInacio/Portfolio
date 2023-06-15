import styled from 'styled-components'

export const AboutContainer = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AboutContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media(min-width: 994px) {
    flex-direction: row-reverse;
    gap: 3rem;
  }
`
export const AboutImage = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(min-width: 994px) {
    align-items: flex-start;
    margin-bottom: 10rem;
  }

  img {
    width: 15rem;
    margin-bottom: 2rem;

    @media (min-width: 468px) {
      width: 20rem;
    }

    @media (min-width: 994px) {
      width: 23rem;
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.white};
      border-top: 2px solid ${props => props.theme.firstColor};
      border-bottom: 2px solid ${props => props.theme.firstColor};
      padding: 2rem 0;
      margin-bottom: 2rem;
      gap: 1rem;

      .dc {
        padding-bottom: 1.5rem;
      }

      .email {
        padding-top: 2rem;
        border-top: 2px solid ${props => props.theme.firstColor};
      }
      
      a {
        display: flex;
        gap: 1rem;
        text-align: start;
        justify-content: flex-start;
        align-items: center;
        
        
        &:hover {
          color: ${props => props.theme.firstColor};
        }
        
        @media (min-width: 468px) {
          padding: 0 1.5rem;
          font-size: 1.1rem;
        }
      }
    }
  }
`

export const AboutDescription = styled.div`
  padding: 0 1rem;
  
  p {
    text-align: start;
    margin-bottom: 1.5rem;
    max-width: 31rem;
  }

`