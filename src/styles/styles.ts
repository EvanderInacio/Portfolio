import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

export const Container = styled.section`
  padding-top: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h2`
  position: relative;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 2rem 0;
  padding-top: 2rem;
  color: var(--first-color);
  z-index: 1;
  opacity: 1;

  @media(min-width: 994px) {
      font-size: 3.5rem;
    }

  span {
    z-index: -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    left: 50%;
    right: 50%;
    color: var(--second-color);
    opacity: 0.2;
    font-weight: 800;
    font-size: 3rem;

    @media(min-width: 994px) {
      top: -0.8rem;
      font-size: 4.5rem;
    }
  }
`

export const ButtonPrimary = styled.button`
  background-color: transparent;
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
