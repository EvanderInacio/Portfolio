import styled from "styled-components"

export const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
`
export const Banner = styled.div`
    position: relative;
    
    
    .bannerUrl {
      border-bottom: 6px solid #1e1e25;
      width: 100%;      
      height: 30rem;
      object-fit: cover;
      object-position: 0 30%;   
      opacity: 0.6;
    }
    
    .bannerContent{
      position: relative;
      bottom: 8rem;
      z-index: 2;
      padding-left: 3rem;
      display: flex;
      gap: 1rem;
      opacity: 1;
    
    h1 {
      color: #FFF;
      font-weight: 800;
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: #00d9ff;
    }

    img {
      width: 15rem;
      border-radius: 10px;
      display: none;

      @media(min-width: 994px) {
        display: block;
      }
    }


  }



`