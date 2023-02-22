import React from 'react';
import Header from './Header.jsx';
import './index.scss';
import { userDataAvatar, UserDataContext } from './userData-context.js';

class App extends React.Component {
  state = {
    userData: '',
  };
  toggleUserData = () => {
    const newUserData = this.state.userData === ''
        ? userDataAvatar
        : userData;
        this.setState({
          userData: newUserData,
        })
  }
  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.userData}>
        <Header onClick={this.toggleUserData}></Header>
        </UserDataContext.Provider>
      </div>
    )
  }
}
export default App;