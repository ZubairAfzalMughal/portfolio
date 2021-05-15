import React from 'react';

function Field(props) {

    return <div>
        <label htmlFor={props.emailLabel}>{props.text}</label>
        <input type={props.fContent} className={props.c} id={props.fId}/>
    </div>
}
export default Field;