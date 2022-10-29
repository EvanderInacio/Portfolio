import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 5rem;
  border-top: 4px solid var(--border-second-color);
  padding: 1.3rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  .links {
    cursor: pointer;
    display: flex;
    gap: 8px;
    font-size: 1.3rem;

    a {
      &:hover {
        color: var(--first-color);
      }
    }
  }
`
