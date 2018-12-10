import React from 'react';

export default class Main extends React.Component {

    render() {

        const title = 'Seed CX Assesment';
        const subtitle = 'Solution by Vincent Pauley';

        return (
            <div>
                <h1>{ title }</h1>
                <p>{ subtitle }</p>
            </div>
        );
    }
}