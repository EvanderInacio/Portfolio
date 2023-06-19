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
    align-items: start;
    margin-top: 3rem;
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
  }
  
  img {
    width: 15rem;
    margin-bottom: 2rem;
    border-radius: 15px;

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
      color: ${props => props.theme.gray};
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
          color: ${props => props.theme.cyan};
        }
        
        @media (min-width: 468px) {
          padding: 0 1.5rem;
          font-size: 1.1rem;
        }
      }
    }
  }
`
export const AboutContact = styled.div`
  @media(max-width: 993px) {
    display: none;
  }

  max-width: 23rem;
  margin-top: 1rem;
  background: ${props => props.theme.backgroundAlt};
  border-radius: 5px;
  padding: 1.6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    margin-bottom: 1.2rem;
    color: ${props => props.theme.textSecondary};
  }

  p {
    color: ${props => props.theme.cyan};
    margin-bottom: .8rem;
  }
`

export const AboutDescription = styled.div`
  padding: 0 1rem;

  @media (min-width: 994px) {
    margin-top: 1.5rem;
  }

  p {
    text-align: start;
    margin-bottom: 1.5rem;
    max-width: 31rem;
    color: ${props => props.theme.text};
  }

`