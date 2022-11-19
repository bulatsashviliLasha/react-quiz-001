import React from 'react';
import "./button.scss";

const Button = props => {
    const cls = [
        "button",
        props.type,
    ]

    return (
        <button onClick={props.onCLick}
                className={cls.join(' ')}
                disabled={props.disabled}>
                {props.children}
        </button>
    )
}

export default Button;
