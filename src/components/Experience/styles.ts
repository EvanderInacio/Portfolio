import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.backgroundAlt};
`

export const ExperienceContent = styled.div`
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${props => props.theme.firstColor};
  }

  h2 {
    font-size: 1.2rem;
    font-weight: semi-bold;
    color: ${props => props.theme.secondColor};
  }
  
    span {
      font-size: .9rem;
      font-weight: 500;
      color: ${props => props.theme.textSecondary};
    }

  p { 
    margin-top: 1.3rem;
    font-size: 1rem;
  }

  ul {
    margin: 1rem 0;

    h3 {
      margin-bottom: .5rem;
      font-size: 1.3rem;
      color: ${props => props.theme.hover};
    }

    .tag{
      display: flex;
      gap: .5rem;

      img {
        width: 2.1rem;
      }
    }
  }
`