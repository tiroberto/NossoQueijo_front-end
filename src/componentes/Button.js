import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalized;
font-size: 1.4rem;
background: transparent;
border-color: ${props => (props.carrinho ? "var(--mainOrange)" : "var(--lightBlue2)")};
color: ${props => (props.carrinho ? "var(--mainOrange)" : "var(--lightBlue2)")};
border: 0.05rem solid;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
align: right;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => (props.carrinho ? "var(--mainOrange)" : "var(--lightBlue2)")};
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`;