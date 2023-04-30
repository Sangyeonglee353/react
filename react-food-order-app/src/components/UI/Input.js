import React from 'react';
import clasess from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return(
        <div className={clasess.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
});

export default Input;