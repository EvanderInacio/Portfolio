import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  height: 4rem;
  font-weight: 600;
  font-size: 1.2rem;
  position: relative;
  z-index: 10;
  background: ${props => props.theme.background};

  a {
    color: ${props => props.theme.textPrimary};
  }

  @media (min-width: 995px) {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    align-items: center;
    box-shadow: ${props => props.theme.background} 0px 10px 30px 1px;
  }

  @media (min-width: 2000px) {
    display: flex;
    justify-content: space-evenly;
  }

  .mobile-content {
    font-weight: 700;
    font-size: 1.2rem;

    span {
      color: ${props => props.theme.firstColor};
    }

    @media (max-width: 994px) {
      margin: 0.8rem 1rem 1rem;
    }
  }
`

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: 1.045rem;
    right: 1rem;
    cursor: pointer;
  }
`

interface Click {
  readonly click: boolean
}

export const NavMenu = styled.nav<Click>`
  @media (max-width: 994px) {
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.background};
    z-index: 10;
    display: ${({ click }) => (click ? 'block' : 'none')};
    opacity: 0.95;
  }

  ul {
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;

    a {
      gap: 4px;
      font-size: 1.2rem;
      font-weight: 600;
      color: ${props => props.theme.textPrimary};
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
          background-color: ${props => props.theme.firstColor};
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
        color: ${props => props.theme.firstColor};
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }

    @media (max-width: 994px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;
      gap: 2rem;
    }
  }
`
