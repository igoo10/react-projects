import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Initializing state
    this.state = {
      person: {
        fullName: 'Ighalo Emmanuel',
        bio: 'A web developer who hates coding',
        imgSrc: 'https://github.com/account',
        profession: 'Web Developer',
      },
      shows: false,
      interval: null,
      timePassed: 0,
    };
  }

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Set up the interval to track the time passed since the component mounted
    const interval = setInterval(() => {
      this.setState((prevState) => ({
        timePassed: prevState.timePassed + 1,
      }));
    }, 1000);

    // Save interval ID in state so we can clear it later
    this.setState({ interval });
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    // Clear the interval when the component is about to unmount
    clearInterval(this.state.interval);
  }

  // Toggle the 'shows' state
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timePassed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since component mounted: {timePassed} seconds</p>
      </div>
    );
  }
}

export default App;
