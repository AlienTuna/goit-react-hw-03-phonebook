import { ContactListItem } from "../ContactList/ContactListItem";
import { EmptyTxt } from "./ContactList.styled";

import PropTypes, { arrayOf } from "prop-types";

export function ContactList({ list, onDeleteContact }) {
    return (
        <ul>
            {list.length
                ? (list.map(({ id, name, number }) =>
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                    />
                ))
                : (<EmptyTxt>Contact list is empty</EmptyTxt>)
            }
        </ul>
    )
}

ContactList.propTypes = {
    list: arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })),
    onDeleteContact: PropTypes.func.isRequired
}