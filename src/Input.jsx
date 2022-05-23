import React from 'react';

import './Input.css';

const Input = ( {valor} ) => {
    return <input type="text" className="input" readOnly value={valor} />;
}

export default Input;