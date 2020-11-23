// import logo from './logo.svg';
import React, { Component} from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import Navbar from "./Components/layout/Navbar";
import UserIterm from "./Components/Users/UserIterm";
import Users from "./Components/Users/Users";
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users:[],
    loading: false
  }
  async componentDidMount() {
    const res = await axios.get('https://api.github.com/search/users?q=repos:%3E12+followers:%3C1000&location:uk+language:python&page=1&per_page=100');
    
    console.log(res.data);
    
    this.setState({ users: res.data, loading: false });
  }
 
  foo = () => "fool";
  render(){
    const name = "John doe";
    const loading = true;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        {/* <UserIterm /> */}
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
