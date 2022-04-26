import { Component } from 'react';

class UserCard extends Component {
  render() {
    const { name, title, hobbies } = this.props
    return (
      <div className="card-container">
        <div className="card-img"><img src="https://source.unsplash.com/random" /></div>
        <h1 className="card-name">{name}</h1>
        <div className="card-info">
          <p><strong>Title: </strong>{title}</p>
          <p><strong>Hobbies: </strong>{hobbies.join(', ')}</p>
        </div>
      </div>
    );
  }
}

export default UserCard
