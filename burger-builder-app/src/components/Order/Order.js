import React from 'react';

import classes from './Order.module.css';

const order = props => (
    <div className={classes.Order}>
        <p>Ingredients:</p>
        <p>Price: <strong>3</strong></p>
    </div>
)

export default order;