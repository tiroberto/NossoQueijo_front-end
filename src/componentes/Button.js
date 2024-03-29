import styled from "styled-components";

export const ButtonContainer = styled.button`
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
font-size: 20px;
font-weight: 100;
padding: 0.4rem 0.6rem;
margin: 0.2rem 0.5rem 0.2rem 0;
background-color: var(--mainOrange);
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
border: solid #337FED 0;
color: #FFFFFF;
&:hover{
    background: #C98206;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;