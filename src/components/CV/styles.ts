import styled from 'styled-components'

export const CVContainer = styled.div`
  background: ${props => props.theme.dark};
  border-radius: 10px;
  text-align: center;
`

export const CVContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${props => props.theme.dark};
  border-radius: 10px;
  padding: 1rem;

  @media (min-width: 468px) {
    padding: 1.5rem;
  }

  @media (min-width: 994px) {
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    padding: 2rem 4rem;
  }
`

export const CVDescription = styled.div`
  background: ${props => props.theme.backgroundSecond};
  border-radius: 5px;
  padding: 1rem;
  position: relative;

  @media(min-width: 994px) {
    margin-bottom: 3rem;
  }
  
  .aspas{
    position: absolute;
    font-size: 3.5rem;
    color: ${props => props.theme.hoverSecond};
  }

  p {
    max-width: 20rem;
    font-size: 1.1rem;
    margin-top: 2.8rem;
    margin-bottom: 2.5rem;
    color: ${props => props.theme.gray};

    @media(min-width: 994px) {
      font-size: 1.3rem;
    }
  }
 
  .profile {
    display: flex;
    gap: 0.9rem;
    align-items: center;

    .name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: start;

      h3 {
        font-size: 1.5rem;
        color: ${props => props.theme.firstColor};
      }
  
      span {
        font-size: 0.9rem;
        color: ${props => props.theme.secondColor};
      }
    }


    img {
      @media(max-width: 468px) {
        width: 3.5rem;
      }

      width: 4rem;
      border-radius: 999px;
    }
  }
`

export const Curriculum = styled.div`
  background: ${props => props.theme.backgroundSecond};
  border-radius: 5px;
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

  img {
    @media (max-width: 380px) {
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