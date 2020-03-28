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
            <Fragment>
                <section className="section">
                    <h3 className="heading">downloads.</h3>
                    <p style={{ color: '#151515' }}>a rob easter egg: download the app 3 times to reveal my real name</p>
                    <div className="counter">
                        {countArray.map(n => <span style={{color: 'white', textAlign: 'center'}}>{n}</span>)}
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default DownloadCounter;
