import styled from "styled-components"

export const LayoutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #040508;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const LayoutMain = styled.div`
  background-color: #282a36;
  border: 1px solid #434759;
  padding: 5px;
  max-height: 600px;
  max-width: 800px;
  height: 100%;
  width: 100%;
  margin: auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e679fc; 
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #90fafd; 
  }
`

export const MainContainer  = styled.main`
  margin: 50px;
`