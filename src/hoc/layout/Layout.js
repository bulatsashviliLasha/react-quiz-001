import React, { Component } from "react";
import MenuToggle from "../../components/navigation/menu-toggle/MenuToggle";
import Drawer from "../../components/navigation/drawer/Drawer";
import "./layout.scss";

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render() {
        return (
            <div className="layout">

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.toggleMenuHandler}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout;
