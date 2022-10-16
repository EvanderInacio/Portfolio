import styled from "styled-components"

export const Section = styled.section`
 margin-top: 5rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 5rem;
`

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--second-color);
  
`

export const ButtonPrimary = styled.button`
  background-color: var(--background);
  font-size: 1.1rem;
  color: #d6d6dc;
  padding: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 2rem;
  border: 2px solid;
  border-image: linear-gradient(225deg, #00d9ff 0%, #c001fa 100%) 1;
  &:hover {
    background: linear-gradient(225deg, #00d9ffe1 0%, #d502face 100%);
    color: black;
  }
`