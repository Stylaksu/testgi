import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import users from './utils/users.json';
import Forms from './components/forms';

class App extends Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

export default App;
// class App extends Component {
//   constructor(props) {
//     super(props);
    // Сразу загружаем данные
  //   this.loadUser();
  // }

  // loadUser() {
  //   users(this.props.users).then(users => {
  //     this.setState({
  //       users: JSON.parse(users)
  //     });
  //   });
  // }

  // update(config) {
  //   this.setState(config);
  // }

//   render() {
//     return (<div>Hello, World!</div>)
//   }
// }