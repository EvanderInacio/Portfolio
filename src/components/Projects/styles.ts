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

  @media (min-width: 1200px) {
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
  border: 2px solid ${props => props.theme.border};

  &:hover{
    border-color: ${props => props.theme.firstColor};
    border-radius: 11px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 1;
    object-fit: cover;

    &:hover {
      opacity: 0.5;
    }
  }

  .title {
    position: absolute;
    padding: 0 1rem 2.2rem 1rem;

    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: linear-gradient(rgb(0, 0, 0, 0) -60%, rgb(8, 2, 5, 15));

    opacity: 0;
    transition: 0.4s ease-in-out;

    &:hover {
      opacity: 1;
      height: 100%;
    }

    h2 {
      font-weight: 900;
      font-size: 1.9rem;
      text-align: center;
      color: ${props => props.theme.firstColor};
    }

    span {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${props => props.theme.secondColor};
      margin-bottom: .8rem;
    }

    .tags {
      display: flex;
      flex-direction: row;
      gap: 9px;

      img {
        object-fit: contain;
      }
    }
  }

  @media(min-width: 1300px) {
    max-width: 25rem;
  }

  max-width: 24rem;
`
