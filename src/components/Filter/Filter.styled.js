import styled from "@emotion/styled";

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