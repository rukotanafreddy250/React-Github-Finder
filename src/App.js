// import logo from './logo.svg';
import React, { Component} from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import Navbar from "./Components/layout/Navbar";
import UserIterm from "./Components/Users/UserIterm";
import Users from "./Components/Users/Users";
import './App.css';

class App extends Component {
  foo = () => "fool";
  render(){
    const name = "John doe";
    const loading = true;
    
    return (
      <div className="App">
        <Navbar />
        <UserIterm />
        <Users />
      </div>
    )    
    // const foo = () => "fool";
    // return(
    //   <div className='App'>
    //     {loading ? <h3>Loading</h3> : <h3>Not Loading</h3>};
    //     <h1>Hello {this.foo()}</h1>
    //   </div>
    // );


  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello From React"));
    // return (
      // // <div className="App">
      // <React.Fragment>
      //   <h1>Hello React</h1>
      // </React.Fragment>
      // // </div>
    // );
  }
}

export default App;
