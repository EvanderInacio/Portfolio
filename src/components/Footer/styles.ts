import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 5rem;
  border-top: 1px solid ${props => props.theme.gray_easy};
  padding: 1.4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  h4 {
    font-size: 1.1rem;
    color: ${props => props.theme.gray};
  }

  .links {
    cursor: pointer;
    display: flex;
    gap: 9px;
    font-size: 1.4rem;
    color: ${props => props.theme.gray};

    a {
      &:hover {
        color: ${props => props.theme.firstColor};
      }
    }
  }
`
