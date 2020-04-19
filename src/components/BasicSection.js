import React, { Component } from 'react';

class BasicSection extends Component {
    render() {
        const { text } = this.props;
        return (
            <div style={{ position: 'relative' }}>
                <div
                    id="section-one"
                    className="padding generic"
                    style={{
                        zIndex: 1,
                        background: 'transparent',
                        maxWidth: '500px'
                    }}
                >
                    <h3 className="heading" style={{ color: 'blue', border: 'none' }}>What's it for?</h3>
                    <p className="sub-text">{text}</p>
                </div>
                <div className="divider-lol"></div> 
            </div>
        );
    }
	
}

export default BasicSection;
