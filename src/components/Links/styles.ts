import styled from 'styled-components'

export const Icons = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: block;
  position: fixed;
  bottom: 0;
  left: 1%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1.4rem;
  @media (min-width: 1100px) {
    left: 3%;
  }
  a {
    cursor: pointer;
    &:hover {
      color: #00d9ff;
      transform: translateY(-4px);
      transition: transform 0.2s;
    }
  }
  .barra {
    margin-top: 1.5rem;
    position: relative;
    left: 8px;
    width: 3px;
    height: 6rem;
    background: #00d9ff;
    border-radius: 5px;
  }
`