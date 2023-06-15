import styled from 'styled-components'

export const Scroll = styled.div`
  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.firstColor};
    z-index: 9;

    &:hover {
      color: ${props => props.theme.secondColor};
    }
  }
`
