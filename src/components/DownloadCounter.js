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
                
            </div>
        );
    }
}

export default DownloadCounter;
