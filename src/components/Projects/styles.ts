import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;

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

  border: 3.5px solid var(--border-second-color);
  box-shadow: var(--border-color) 0px 10px 15px 10px;

  &:hover{
    border-color: #00d9ff;
    border-radius: 15px;
  }

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
  }

  max-width: 22rem;
`
