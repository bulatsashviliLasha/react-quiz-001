import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Backdrop from "../../ui/backdrop/Backdrop";
import "./drawer.scss";

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Auth', exact: false},
    {to: '/quiz-creator', label: 'Create quiz', exact: false},
]

class Drawer extends Component {

    renderLinks () {
        return  links.map((link,index) => {
            return (
                <li key={index}>
                    <NavLink to={link.to}
                             exact={link.exact}
                             activeClassName='active'
                             onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render(){
        const cls = ['drawer']

        if (!this.props.isOpen) {
            cls.push('close')
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null }
            </React.Fragment>
        )
    }
}

export default Drawer
