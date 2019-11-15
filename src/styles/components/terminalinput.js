import styled from "styled-components"

export const TerminalInputWrapper = styled.form`
  margin: 0 0 20px;
  caret-color: green;

  &::before{
    content: "❯ ";
    color: #7aed91;
  }
`

export const TerminalInputElement = styled.input`
  border: 0;
  background-color: transparent;
  width: 95%;
`
