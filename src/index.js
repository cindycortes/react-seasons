import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() { // method

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} /> 
                                    // prop = value
            // property from the state of the app component and passing it as a prop down into the season display
            // can take a state from one component and pass it down as a prop to the child
        }

        return <div>Loading! </div>;

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

