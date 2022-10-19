import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  align-items: center;
  transition: transform 0.3s;
  overflow: hidden;

  border: 3px solid #1e1e25;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .title {
    position: absolute;
    padding: 0 1rem 2rem 1rem;

    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: linear-gradient(rgb(0, 0, 0, 0) -20%, rgb(4, 0, 1, 10));

    opacity: 0;
    transition: 0.4s ease-in-out;

    &:hover {
      opacity: 1;
      height: 100%;
    }

    h2 {
      font-weight: 900;
      font-size: 1.8rem;
      text-align: center;
      color: #00d9ff;
    }

    span {
      font-size: 1.1rem;
      font-weight: 600;
      color: #5252e0;
    }
    /* article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fef501;
    font-size: 0.95rem;
    font-weight: 800;
    margin-bottom: 0.4rem;
    span {
      display: inline-flex;
      align-items: center;
      gap: 0.2rem;
    }
  }
  p {
    font-style: italic;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  } */
  }

  max-width: 350px;
`
