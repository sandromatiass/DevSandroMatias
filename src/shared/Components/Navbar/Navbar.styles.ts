import styled from "styled-components";

export const SNavbar = styled.header`
  background-color: #0D0D0D;
  width: auto;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`
export const SThemeButton = styled.div`
  .switch input {
    opacity: 0;
    position: absolute;
  }
  
  .slider {
    position: relative;
    text-align: center;
    padding: 0.6rem;
    cursor: pointer;
    background-color: ${props => props.theme.colors.buttonThemeColor};
  } 
`