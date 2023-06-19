import styled from "styled-components";

export const ContainerEducation = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1.5rem;
`

export const EducationContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: 994px) {
    flex-direction: row;
  }

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
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.dark};
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
    color: ${props => props.theme.gray_easy};
    
    span {
      color: ${props => props.theme.gray};
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
    color: ${props => props.theme.color};
    margin-bottom: 1.1rem;
    font-size: 1rem;
  }
  
  p {
    white-space: break-spaces;
    font-size: 15px;
    color: ${props => props.theme.text};
  }
`

export const EducationImage = styled.div`
  max-width: 500px;
  max-height: 650px;
  display: inline-block;
  position: sticky;
  top: 1px;
  margin: 0 auto;

  .education-logo {
    @media(max-width: 994px) {
      display: none;
    }

    display: block;
    width: 19rem;
    margin-left: 5rem;
  }
`;
