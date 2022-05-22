import React from 'react';

import './Button.css';

const Button = ( {children, className, onClick} ) => {
    let asd = className + ' type-number-button';
    return (

    <button 
         className={asd}
        
        onClick={() => onClick(children)}
    >
        { children }
    </button>);
}
 
export default Button;