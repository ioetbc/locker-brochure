import React, { Component, Fragment } from 'react';
import { times } from 'lodash';

class DownloadCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count } = this.props;
        const fudge = count + 4649;
        const countArray = fudge.toString().split('');
        console.log('countArray', countArray);

        return (
            <div className="counter">
                {/* <h1 className="heading" style={{ color: 'blue', textTransform: 'none' }}>Downloads</h1> */}
                <div className="counter-wrapper">
                    {countArray.map(n => <span style={{color: 'white', textAlign: 'center'}}>{n}</span>)}
                </div>
            </div>
        );
    }
}

export default DownloadCounter;
