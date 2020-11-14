import React, { Component } from 'react'

export default class navbar extends Component {
    static defaultProps = {
        title: "GitHub Finder" ,
        icon :"fab fa-github"
    }
    render() {
        return (
            <navbar className="navbar bg-primary">
                <h1> 
                    <i className={this.props.icon} />{this.props.title}
                </h1>
            </navbar>
        );
    }
}
