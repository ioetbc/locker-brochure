import React, { Component } from 'react';
import { times } from 'lodash';

class DownloadCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count } = this.props;

        console.log('coun t lol', count)

        return (
            <div className="counter">
                <h1 style={{color: 'white', textAlign: 'center'}}>{count}</h1>
            </div>
        );
    }
}

export default DownloadCounter;
