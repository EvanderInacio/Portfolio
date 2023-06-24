import styled from 'styled-components'

export const Scroll = styled.div`
  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    background: ${props => props.theme.secondColor};
    padding: .5rem .7rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${props => props.theme.text};
    z-index: 9;
    
    &:hover {
      background: ${props => props.theme.hoverSecond};
    }
  }
`
