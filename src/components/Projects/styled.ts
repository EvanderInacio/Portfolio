import styled from "styled-components"

interface Img {
  img: string
}

export const ProjectsContent = styled.div< Img >`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 10px;

  background: url(${(props) => props.img}) no-repeat;
  background-size: 32rem;
  width: 30rem;
  height: 20rem;

`