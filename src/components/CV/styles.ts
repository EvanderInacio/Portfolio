import styled from 'styled-components'

export const CVContainer = styled.div`
  background: ${props => props.theme.border};
  border-radius: 20px;
  text-align: center;
`

export const CVContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${props => props.theme.backgroundSecond};
  border-radius: 10px;
  padding: 1rem;

  @media (min-width: 468px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    padding: 2rem 4rem;
  }
`

export const CVDescription = styled.div`
  background: ${props => props.theme.backgroundContact};
  border-radius: 5px;
  padding: 1rem;
  position: relative;

  @media(min-width: 994px) {
    margin-bottom: 3rem;
  }
  
  .aspas{
    position: absolute;
    font-size: 3rem;
    color: ${props => props.theme.hoverSecond};
  }

  p {
    max-width: 20rem;
    font-size: 1.1rem;
    margin: 2rem 0; 
    color: ${props => props.theme.textSecondary};

    @media(min-width: 994px) {
      font-size: 1.3rem;
    }
  }
 

  .profile {
    display: flex;
    gap: 13px;


    h3 {
      font-size: 1.2rem;
      color: ${props => props.theme.firstColor};
    }

    span {
      font-size: 0.8rem;
      color: ${props => props.theme.secondColor};
    }

    img {
      width: 3.5rem;
      border-radius: 9999px;
    }
  }

`

export const Curriculum = styled.div`
  background: ${props => props.theme.backgroundContact};
  border-radius: 5px;
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1rem;

  img {
    @media (max-width: 360px) {
      display: none;
    }

    width: 5rem;

    @media(min-width: 768px) {
      width: 8rem;
    }

    @media(min-width: 994px) {
      width: 15rem;
    }
  }

  a {
    @media(min-width: 994px) {
      margin-top: 3rem;
    }
  }
`