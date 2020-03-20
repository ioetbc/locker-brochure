import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { openMenu: false };
    }

    render() {
        return (
            <React.Fragment>
                <button
                    onClick={() => this.setState({ openMenu: !this.state.openMenu })}
                    className="hamburger-icon"
                >
                    <span></span>
                    <span></span>
                </button>

                {this.state.openMenu &&
                    <div className="menu">
                        <p>haduwefeuhfefjoe</p>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Menu;
