import styled from "@emotion/styled";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
transition: var(--transition-default);
`
export const InputStyled = styled.input`
background-color: var(--input-bg-clr);
border: solid 1px var(--txt-clr);
padding: 5px;
margin-bottom: 10px;
color: var(--input-txt-clr);
letter-spacing: .15em;
&:focus {
    background-color: var(--input-focus-bg-clr);
}
transition: var(--transition-default);
`

export const BtnStyled = styled.button`
text-transform: capitalize;
font-size: 18px;
background-color: var(--btn-bg-clr);
border: solid 1px black;
padding: 5px;
width: 50%;
align-self: center;
&:focus, &:hover, &:active {
    background-color: var(--btn-bg-active-clr);
}
&:active {
    box-shadow: 0 0 2px var(--input-txt-clr);
}
transition: var(--transition-default);
`