import styled from 'styled-components'

export const TabsContainer = styled.section`
  padding-top: 2rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  
  .vector-circle{
    

    position: fixed;
    z-index: -999;
    opacity: 0.5;
    bottom: -15%;
    
    width: 25rem;
  
    animation: cubo 7s linear infinite;
    @keyframes cubo {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .tabs {
    padding: 0 1.5rem;
    display: flex;
   

    @media (max-width: 994px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;
    }

    @media(min-width: 1300px) {
      gap: 8rem;
    }
  }
`

export const TabButton = styled.div`
  margin-top: -4rem;

  h2 {
    font-size: 5rem;
    font-weight: 700;
    z-index: -10;
    position: relative;
    top: 2.8rem;
    margin-top: -2.2rem;
  }
  
  .tab__list {
    width: 15rem;
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 1.5rem 2rem;
    border: 2px solid ${props => props.theme.secondColor};
    border-radius: 7px;
    background: none;
    color: ${props => props.theme.text};
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;


    &:hover {
      box-shadow: 0 8px 25px -5px ${props => props.theme.secondColor}, 0 7px 10px -6px ${props => props.theme.firstColor};
    }
  }

  .is-active {
    background-color: ${props => props.theme.secondColor};
    border-radius: 7px;
  }
`

export const TabContent = styled.div`
  .tab__panel {
    display: none;
    padding: 2rem;
    background-color: ${props => props.theme.backgroundAlt};
    border-radius: 10px;
  }

  .tab__panel.is-active {
    display: block;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    
    @media(min-width: 768px) {
      justify-content: space-between;
      flex-direction: row;
    }

    .title-content {
      display: flex;
      gap: 1rem;

     @media (max-width: 944px) {
      flex-direction: column;
     }

      img {
        width: 5rem;
        border-radius: 100%;
      }

      .title {
        display: flex;
        flex-direction: column;

        h1 {
          font-size: 1.5rem;
          color: ${props => props.theme.firstColor};
        }

        h2 {
          font-size: 1rem;
          color: ${props => props.theme.blue};
        }

      }
    }
    
    .office {
      font-size: 1rem;
      font-style: italic;
      font-weight: 700;
      align-items: end;
      color: ${props => props.theme.gray_easy};
    }

  }

  p {
    margin-top: 2rem;
    max-width: 40rem;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.text};
  }

  .techs {
    h3 {
      color: ${props => props.theme.secondColor};
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      gap: 1.3rem;

      @media(min-width: 468px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media(min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media(min-width: 994px) {
        grid-template-columns: repeat(6, 1fr);
      }

      @media(min-width: 1300px) {
        display: flex;
      }

      .tags {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;

        img {
          width: 2.5rem;
        }
      }
    }
  }
`
