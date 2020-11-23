import React, { Component } from 'react'
// import Navbar from '../layout/Navbar';
import UserIterm from "./UserIterm";
export default class Users extends Component {
    // state = {
    //     users: [
    //         {
    //             id: '1',
    //             login: "aholachek",
    //             avatar_url: "https://avatars2.githubusercontent.com/u/3680488?v=4",
    //             html_url: "https://github.com/aholachek",
    //         },
    //         {
    //             id: '2',
    //             login: "egoing",
    //             avatar_url: "https://avatars2.githubusercontent.com/u/3814757?v=4",
    //             html_url: "https://github.com/egoing",
    //         },
    //         {
    //             id: '3',
    //             login: "lining0806",
    //             avatar_url: "https://avatars2.githubusercontent.com/u/2107245?v=4",
    //             html_url: "https://github.com/lining0806",
    //         }
    //     ]
    // }

    render() {
        console.log(this.props.users);
        return (
            <div style={userStyle}>
                { this.props.users.map(user => (
                    <UserIterm key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGp: '1rem'
}
   