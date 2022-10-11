import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 4rem;
  font-weight: 600;
  font-size: 1.2rem;
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

    a {
      display: flex;
      gap: 3px;
      font-weight: 500;
      font-size: 1.2rem;
      color: var(--text-primary);
      height: 1rem;
      cursor: pointer;
      
      span {
        line-height: 1.08;
        white-space: nowrap;
        position: relative;
        
        &:before {
          content: '';
          height: 2px;
          width: auto;
          background-color: var(--first-color);
          border-radius: 0px 0px 4px 4px;
          position: absolute;
          bottom: -6px;
          left: 0px;
          right: 0px;
          opacity: 0;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
        }
      }
      &:hover {
        color: var(--first-color);
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
    
    @media(max-width: 994px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;
    }
  }
`
