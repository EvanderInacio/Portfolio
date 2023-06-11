import styled from 'styled-components'

export const Icons = styled.div`
  @media (max-width: 994px) {
    display: none;
  }

  z-index: 10;
  display: block;
  position: fixed;
  bottom: 0;
  left: 1%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1.5rem;
  
  @media (min-width: 1100px) {
    left: 2%;
  }

  a {
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.firstColor};
      transform: translateY(-4px);
      transition: transform 0.2s;
    }
  }

  .barra {
    margin-top: 1.2rem;
    position: relative;
    left: 8px;
    width: 3px;
    height: 6rem;
    background: ${props => props.theme.firstColor};
    border-radius: 5px;
  }
` 