import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ProjectsTitle = styled.div`
  background: ${props => props.theme.backgroundSecond};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  margin-bottom: 5rem;

  h3 {
    font-size: 15px;
    color: ${props => props.theme.secondColor};
    font-weight: 300;
  }

  h1 {
    font-size: 2rem;
    color: ${props => props.theme.firstColor};
    margin-bottom: 1.5rem;
  }

  p {
    text-align: center;
    max-width: 30rem;
    margin-bottom: 1.3rem;
  }

  button {
    border: none;
    background: transparent;
    color: ${props => props.theme.white};
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    gap: .3rem;


    &:hover {
      color: ${props => props.theme.firstColor};
    }
  }
`

export const ProjectsContent = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  gap: 1rem;
  margin-bottom: 8rem;
 

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
`

export const ProjectsItem = styled.div`
  border: 3px solid ${props => props.theme.backgroundSecondAlt};
  border-radius: 10px;
  max-width: 24rem;
  cursor: pointer;
  margin: 1rem 0;
  opacity: 0.8;
  
  &:hover {
    border: 3px solid ${props => props.theme.firstColor};
    border-radius: 5px;
    opacity: 1;
  }

  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all;
    transition-duration: 500ms;

    &:hover {
      transform: scale(1.1);
    }
  }

  .description {
    margin-top: -1rem;
    background-color: ${props => props.theme.backgroundSecondAlt};
    padding: 2rem 1rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${props => props.theme.firstColor};
      margin-bottom: 1rem;
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin-bottom: 1rem;
    }

    .tags {
      display: flex;
      gap: .8rem;  
    }

  }
`