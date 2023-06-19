import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  .AboutImg {
    width: 10rem;
    display: flex;
    justify-self: center;
    align-self: center;
    border-radius: 5px;
    margin-bottom: 2rem;
  }

  .aboutContent {
    padding: 0 1rem;
    text-align: start;
    max-width: 31rem;
  }

  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 994px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .AboutImg {
      width: 300px;
    }

    .aboutContent {
      width: 31rem;
      margin-bottom: 3rem;
      font-weight: 500;
      align-items: center;
    }
  }
`
