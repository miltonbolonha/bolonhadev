import styled from "styled-components"

export const TerminalInputWrapper = styled.section`

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  
  
  .ais-SearchBox {

    .ais-SearchBox-form{
      margin: 0 0 20px;
      caret-color: green;

      &::before{
        content: "❯ ";
        color: #7aed91;
      }
    }
  }
  
  .ais-Stats {
    color: #eaf4f4;
  }

  .ais-SearchBox-input {
    border: 0;
    background-color: transparent;
    width: 95%;

    color: #eaf4f4;
    
    
    &::placeholder {
      color: #7aed91;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`