import styled from "styled-components";

export const WorkContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;
  background-color: ${props => props.theme.border};
  padding: 1rem;
  border-radius: 2px;
  border-top: 4px solid ${props => props.theme.firstColor};

  .img-content {
    img {
      width: 10rem;
    }

    @media (max-width: 768px) {
      display: inline-flex;
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3rem;
  }
`

export const WorkContent = styled.div`
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.firstColor};
  }

  span {
    font-size: 1.1rem;
    font-weight: semi-bold;
    color: ${props => props.theme.secondColor};
  }

  p {
    margin-top: 1.7rem;
    font-size: 1rem;
  }

  ul {
    margin-top: 1.2rem;

    h3 {
      margin-bottom: .5rem;
      font-size: 1.3rem;
      color: ${props => props.theme.hover};
    }

    img {
      width: 3rem;
      margin-left: 1rem;
    }
  }

  button {
    margin-top: 1.5rem;
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.theme.textPrimary};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    span {
      color: red;
      font-size: 1.5rem;
    }

    &:hover {
      color: ${props => props.theme.textSecondary};
    }
  }
`