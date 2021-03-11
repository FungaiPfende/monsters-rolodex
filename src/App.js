import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super()
// https://jsonplaceholder.typicode.com/users
    this.state ={
      monsters: [
        {
          name: 'Frankenstein',
          id: 1,
          email: 'franken@monsters.com'
        },
        {
          name: 'Dracula',
          id: 2,
          email: 'dracula@monsters.com'
        },
        {
          name: 'Zombie',
          id: 3,
          email: 'zombie@monsters.com'
        },
        {
          name: 'Gremlin',
          id: 4,
          email: 'gremlin@monsters.com'
        }
      ],
      searchField: ''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;