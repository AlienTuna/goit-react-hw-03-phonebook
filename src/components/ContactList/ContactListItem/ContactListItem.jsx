import { BtnStyled, ItemStyled, NameStyled } from "./ContactListItem.styled";
import PropTypes from "prop-types";

export function ContactListItem({ id, name, number, onDeleteContact }) {
    return (
        <ItemStyled id={id}>
            <span><NameStyled>{name}: </NameStyled>{number}</span> 
            <BtnStyled 
            title="Delete"
            onClick={() => onDeleteContact(id)}
            >❌</BtnStyled>
        </ItemStyled>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    number: PropTypes.string.isRequired, 
    onDeleteContact: PropTypes.func.isRequired
}