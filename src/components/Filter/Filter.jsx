import React from "react";
import { InputStyled } from "./Filter.styled";
import PropTypes from "prop-types";

export function Filter({filterString, onSetFilter}) {
    return (
        <label name="filter">
            {/* <h3>Find contact by name</h3> */}
            <InputStyled
            name="filter"
            type="text"
            value={filterString}
            onChange={onSetFilter}
            />
        </label>
    )
}

Filter.propTypes = {
    filterString: PropTypes.string,
    onSetFilter: PropTypes.func.isRequired
}