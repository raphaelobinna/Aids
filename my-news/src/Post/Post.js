import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1> hey </h1>
        <div className="Info">
            <div className="Author">{props.title}</div>
        </div>
    </article>
);

export default post;