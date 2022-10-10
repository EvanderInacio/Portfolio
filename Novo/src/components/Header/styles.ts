import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 4rem;
  font-weight: 600;
  font-size: 1.3rem;
  position: relative;
  margin-top: 1rem;

  a {
    color: var(--text-primary);
  }

  @media(min-width: 995px) {
    display: flex;
    justify-content: space-around;
  }

  .mobile-content{
    @media(max-width: 994px) {
      margin: 1rem;
    }
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: 0;
    right: 1rem;
    cursor: pointer;
    z-index: 1;
  }
`

interface Click {  
  readonly click : boolean; 
}

export const NavMenu = styled.div< Click >`
  @media (max-width: 994px) {
    height: 100vh;
    width: 100vw;
    background: var(--background);
    z-index: 10;
    display: ${({click}) => (click ? 'block' : 'none')};
  }

  ul {
    display: flex;
    gap: 1rem;
    
    @media(max-width: 994px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;
    }
  }
`
