import styled from 'styled-components'

export const Scroll = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--first-color);
  z-index: 9;

  &:hover {
    color: var(--second-color);
  }
`
