import React from 'react';

import './Visor.css';

const Visor = ( {valor} ) => {
    return <input type="text" className="visor" readOnly value={valor} />;
}

export default Visor;