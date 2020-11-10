import React from "react";

function dropdownOption(props) {
    return (
        <option value={props.option}>{props.option}</option>
    )
}

export default dropdownOption;