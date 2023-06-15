import styled from "styled-components";

export const ContainerEducation = styled.div`
  background-color: ${props => props.theme.backgroundContact};
  position: relative;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;

  @media(min-width: 768px) {
    margin-bottom: 8rem;
  }
  
  @media(min-width: 1100px) {
    margin-bottom: 15rem;
  }
  
  .vector-circle{
    position: absolute;
    left: 1rem;
    z-index: -999;
    bottom: -5.5rem;
    width: 15rem;

    @media(min-width: 768px) {
      bottom: -9rem;
      width: 30rem;
    }
    
    @media(min-width: 1100px) {
      bottom: -15.5rem;
      left: 10rem;
      width: auto;
    }

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
`

export const EducationContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  ::before ::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const EducationList = styled.div`
  display: inline-block;
  vertical-align: top;
  justify-content: center;
`;

export const List = styled.div`
  @media (min-width: 768px) {
    flex-direction: row;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid ${props => props.theme.borderSecond};
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 350px) {
    padding: 1rem;
  }
  
`

export const ListImage = styled.div`
  display: flex;
  flex-direction: column;
  
  img {
    width: 11rem;
    border-radius: 5px;
    padding: 1rem;
    background-color: ${props => props.theme.backgroundSecond};
    margin-bottom: 1rem;
  }

  a {
    font-size: medium;
  }

  p {
    display: flex;
    gap: .5rem;
    font-size: 1rem;
    
    span {
      color: ${props => props.theme.firstColor};
    }
  }

`

export const ListContent = styled.div`
  max-width: 25rem;

  h2 {
    font-size: 1.7rem;
    font-weight: 800;
    color: ${props => props.theme.firstColor};
  }

  h3 {
    color: ${props => props.theme.secondColor};
    margin-bottom: 1.1rem;
    font-size: 1rem;
  }
  
  p {
    white-space: break-spaces;
    font-size: 15px;
  }
`

export const EducationImage = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }

  max-width: 500px;
  max-height: 650px;
  display: inline-block;
  position: sticky;
  top: 1px;

  .education-logo {
    width: 19rem;
    margin-left: 5rem;
  }
`;
