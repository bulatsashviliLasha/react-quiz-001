import React, { Component } from "react";
import "./layout.scss";

class Layout extends Component {
    render() {
        return (
            <div className="layout">

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout;
