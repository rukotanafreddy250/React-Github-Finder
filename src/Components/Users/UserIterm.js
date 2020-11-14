import React, { Component } from 'react'

export default class UserIterm extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         id: "12345",
    //         login: "aholachek",
    //         avatar_url: "https://avatars2.githubusercontent.com/u/3680488?v=4",
    //         html_url: "https://github.com/aholachek"
    //     }
    // }

    state = {
        login: "aholachek",
        avatar_url: "https://avatars2.githubusercontent.com/u/3680488?v=4",
        html_url: "https://github.com/aholachek"
    }
    render() {
        const {id, login, avatar_url, html_url} = this.props.user;
        return (
            <div className="text-center">
                <h2>{login}</h2>
                <img src={avatar_url} alt="" className='rounded-circle' style={{  width: '90px'}} />
                <div>
                    <a className='btn btn-dark btn-sm my-1' href={html_url}>More</a>
                </div>
            </div>
        )
    }
}