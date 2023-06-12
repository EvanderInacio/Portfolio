import styled from "styled-components";

export const WorkContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.backgroundSecondAlt};
`

export const WorkContent = styled.div`
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

    img {
      width: 2.1rem;
      margin-left: .8rem;
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${props => props.theme.textSecondary};
  }
`