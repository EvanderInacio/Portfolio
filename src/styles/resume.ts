import styled from 'styled-components';


export const PageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  iframe {
    width: 100%;
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 80%;
      height: 70.4rem;
    }
  }
`;